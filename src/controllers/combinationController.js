
const pool = require('../config/db');
const generateCombinations = require('../helpers/generateCombinations');

exports.generateAndSaveCombinations = async (req, res) => {
    const { items, length } = req.body;

    if (!Array.isArray(items) || typeof length !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }

    const selectedItems = [];
    const usedPrefixes = new Set();

    const itemMap = {
        1: ['A1', 'B1', 'C1'],
        2: ['B1', 'B2', 'C1'],
    };

    for (const item of items) {
        const labels = itemMap[item];
        if (labels) {
            for (const label of labels) {
                const prefix = label[0];
                if (!usedPrefixes.has(prefix)) {
                    selectedItems.push(label);
                    usedPrefixes.add(prefix);
                }
            }
        }
    }

    const combinations = generateCombinations(selectedItems, length);
    const connection = await pool.getConnection();

    try {
        await connection.beginTransaction();

        for (const item of selectedItems) {
            await connection.query('INSERT IGNORE INTO items (name) VALUES (?)', [item]);
        }

        const combinationIDs = [];
        for (const combination of combinations) {
            const combinationString = JSON.stringify(combination);
            const [result] = await connection.query(
                'INSERT INTO combinations (combination) VALUES (?)', [combinationString]
            );
            combinationIDs.push(result.insertId);
        }

        const responseObject = {
            id: combinationIDs[0],
            combination: combinations
        };

        await connection.query(
            'INSERT INTO responses (response) VALUES (?)', [JSON.stringify(responseObject)]
        );

        await connection.commit();
        res.json(responseObject);
    } catch (error) {
        await connection.rollback();
        res.status(500).json({ error: 'Database error' });
    } finally {
        connection.release();
    }
};
