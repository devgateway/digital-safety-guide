const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Request Logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Serve data directory explicitly to ensure priority
app.use('/data', express.static(path.join(__dirname, '../client/dist/data')));

// Serve static files from the client build directory
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/health', (req, res) => {
    res.send('Online Harassment Support Platform Static Server is running');
});

// Handle SPA routing: serve index.html for any unknown route
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
