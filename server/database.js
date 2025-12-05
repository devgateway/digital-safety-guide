const path = require('path');

// Strategy implementations
const strategies = {
    sqlite: {
        init: () => {
            const Database = require('better-sqlite3');
            const dbPath = path.join(__dirname, 'reports.db');
            const db = new Database(dbPath, { verbose: console.log });

            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS reports (
                    id TEXT PRIMARY KEY,
                    data TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
                );
            `;
            db.exec(createTableQuery);
            return db;
        },
        save: (db, id, data) => {
            const stmt = db.prepare('INSERT OR REPLACE INTO reports (id, data, created_at) VALUES (?, ?, CURRENT_TIMESTAMP)');
            return stmt.run(id, JSON.stringify(data));
        },
        get: (db, id) => {
            const stmt = db.prepare('SELECT * FROM reports WHERE id = ?');
            const row = stmt.get(id);
            if (row) {
                return { ...row, data: JSON.parse(row.data) };
            }
            return null;
        }
    },
    postgres: {
        init: async () => {
            const { Pool } = require('pg');
            const pool = new Pool({
                connectionString: process.env.DATABASE_URL,
                ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
            });

            await pool.query(`
                CREATE TABLE IF NOT EXISTS reports (
                    id VARCHAR(255) PRIMARY KEY,
                    data TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            `);
            return pool;
        },
        save: async (pool, id, data) => {
            const query = `
                INSERT INTO reports (id, data, created_at) 
                VALUES ($1, $2, CURRENT_TIMESTAMP)
                ON CONFLICT (id) DO UPDATE 
                SET data = $2, created_at = CURRENT_TIMESTAMP
            `;
            return await pool.query(query, [id, JSON.stringify(data)]);
        },
        get: async (pool, id) => {
            const res = await pool.query('SELECT * FROM reports WHERE id = $1', [id]);
            if (res.rows.length > 0) {
                return { ...res.rows[0], data: JSON.parse(res.rows[0].data) };
            }
            return null;
        }
    },
    mysql: {
        init: async () => {
            const mysql = require('mysql2/promise');
            const pool = mysql.createPool(process.env.DATABASE_URL); // specific config options can be added if needed

            await pool.execute(`
                CREATE TABLE IF NOT EXISTS reports (
                    id VARCHAR(255) PRIMARY KEY,
                    data JSON,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
            `);
            return pool;
        },
        save: async (pool, id, data) => {
            const query = `
                INSERT INTO reports (id, data, created_at) 
                VALUES (?, ?, CURRENT_TIMESTAMP)
                ON DUPLICATE KEY UPDATE data = ?, created_at = CURRENT_TIMESTAMP
            `;
            // MySQL supports JSON type, but for consistency with others we'll stringify if mapped to text, 
            // but here we defined it as JSON. driver handles object->json automatically often, but let's be safe.
            const json = JSON.stringify(data);
            return await pool.execute(query, [id, json, json]);
        },
        get: async (pool, id) => {
            const [rows] = await pool.execute('SELECT * FROM reports WHERE id = ?', [id]);
            if (rows.length > 0) {
                // If column is JSON type, mysql2 parses it. If string/text, we parse it.
                // Assuming JSON type for modern MySQL/MariaDB.
                let data = rows[0].data;
                if (typeof data === 'string') data = JSON.parse(data);
                return { ...rows[0], data };
            }
            return null;
        }
    }
};

// Current Active Strategy
let dbType = process.env.DB_TYPE || 'sqlite';
// Map 'mariadb' or 'postgres' alias if user provides those
if (dbType === 'mariadb') dbType = 'mysql';
if (dbType === 'postgresql') dbType = 'postgres';

let dbInstance = null;
const strategy = strategies[dbType];

if (!strategy) {
    console.error(`Unknown DB_TYPE: ${dbType}. Defaulting to sqlite.`);
    dbType = 'sqlite';
}

// Public API
function initDb() {
    // For async DBs (pg/mysql), init() returns a promise or client. 
    // We'll handle initialization mostly lazily or strictly at startup.
    try {
        const result = strategies[dbType].init();
        if (result instanceof Promise) {
            result.then(inst => {
                dbInstance = inst;
                console.log(`${dbType} database connected.`);
            }).catch(err => console.error(`${dbType} connection error:`, err));
        } else {
            dbInstance = result;
            console.log(`${dbType} database initialized.`);
        }
    } catch (e) {
        console.error(`Failed to initialize ${dbType}:`, e);
    }
}

async function saveReport(id, data) {
    if (!dbInstance) throw new Error('Database not initialized');
    return await strategies[dbType].save(dbInstance, id, data);
}

async function getReport(id) {
    if (!dbInstance) throw new Error('Database not initialized');
    return await strategies[dbType].get(dbInstance, id);
}

module.exports = {
    initDb,
    saveReport,
    getReport
};
