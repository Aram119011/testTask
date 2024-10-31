
const db = require('../config/db');

const insertItem = async (item) => {
    return db.query('INSERT IGNORE INTO items (name) VALUES (?)', [item]);
};

module.exports = { insertItem };
