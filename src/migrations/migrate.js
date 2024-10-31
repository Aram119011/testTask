
const db = require('../config/db');

async function migrate() {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS items (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE
            );
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS combinations (
                id INT AUTO_INCREMENT PRIMARY KEY,
                combination TEXT NOT NULL
            );
        `);

        await db.query(`
            CREATE TABLE IF NOT EXISTS responses (
                id INT AUTO_INCREMENT PRIMARY KEY,
                response TEXT NOT NULL
            );
        `);

        console.log('Migration completed successfully.');
    } catch (error) {
        console.error('Error during migration:', error);
    }
}

migrate();