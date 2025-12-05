const express = require('express');

const db = require('./database');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Initialize DB schema
db.initDb();

// Helper to generate XXX-XXX format ID
function generateShortId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let part1 = '';
    let part2 = '';
    for (let i = 0; i < 3; i++) {
        part1 += chars.charAt(Math.floor(Math.random() * chars.length));
        part2 += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${part1}-${part2}`;
}

router.post('/save', (req, res) => {
    try {
        const { id, data } = req.body;

        // If an ID is provided, reuse it (update). Otherwise create a new one.
        const reportId = id || generateShortId();

        db.saveReport(reportId, data);

        res.json({ success: true, key: reportId });
    } catch (error) {
        console.error('Save error:', error);
        res.status(500).json({ success: false, error: 'Failed to save report' });
    }
});

router.get('/load/:key', (req, res) => {
    try {
        const { key } = req.params;
        const report = db.getReport(key);

        if (!report) {
            return res.status(404).json({ success: false, error: 'Report not found' });
        }

        res.json({ success: true, data: report.data });
    } catch (error) {
        console.error('Load error:', error);
        res.status(500).json({ success: false, error: 'Failed to load report' });
    }
});

module.exports = router;

router.get('/logic-trees', (req, res) => {
    try {
        const dataPath = path.join(__dirname, 'data', 'logicTrees.json');
        const data = fs.readFileSync(dataPath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error serving logic trees:', error);
        res.status(500).json({ error: 'Failed to load logic trees' });
    }
});
