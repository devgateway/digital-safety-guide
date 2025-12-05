const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'reports.db');
const db = new Database(dbPath, { verbose: console.log });

// Initialize database
function initDb() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS reports (
            id TEXT PRIMARY KEY,
            data TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
    `;
    db.exec(createTableQuery);
}

function saveReport(id, data) {
    const stmt = db.prepare('INSERT OR REPLACE INTO reports (id, data, created_at) VALUES (?, ?, CURRENT_TIMESTAMP)');
    const info = stmt.run(id, JSON.stringify(data));
    return info;
}

function getReport(id) {
    const stmt = db.prepare('SELECT * FROM reports WHERE id = ?');
    const row = stmt.get(id);
    if (row) {
        return {
            ...row,
            data: JSON.parse(row.data)
        };
    }
    return null;
}

module.exports = {
    initDb,
    saveReport,
    getReport
};
