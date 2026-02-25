const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'client/src');
const localesPath = path.join(__dirname, 'client/src/locales/en');

// Read all EN locale keys
const enFiles = fs.readdirSync(localesPath).filter(f => f.endsWith('.json'));
const enKeys = new Set();
const enDataMap = {};

function traverse(obj, prefix = '') {
    let keys = [];
    for (let key in obj) {
        let fullPath = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            keys = keys.concat(traverse(obj[key], fullPath));
        } else {
            keys.push(fullPath);
        }
    }
    return keys;
}

for (let file of enFiles) {
    const filePath = path.join(localesPath, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    enDataMap[file] = data;
    const keys = traverse(data);
    keys.forEach(k => enKeys.add(k));
}

// Recursively find all js/jsx files
function findFiles(dir) {
    let res = [];
    const list = fs.readdirSync(dir);
    for (let file of list) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            res = res.concat(findFiles(fullPath));
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            res.push(fullPath);
        }
    }
    return res;
}

const allSrcFiles = findFiles(srcPath);
const usedKeys = new Set();
const keyRegexes = [
    /t\(['"](.*?)['"]\)/g,
    /\<Trans\s+.*?i18nKey=['"](.*?)['"]/g
];

for (let file of allSrcFiles) {
    const content = fs.readFileSync(file, 'utf8');
    for (let regex of keyRegexes) {
        let match;
        while ((match = regex.exec(content)) !== null) {
            // Ignore dynamically constructed keys like `global.resources.${jsonKey}.name`
            if (!match[1].includes('$')) {
                usedKeys.add(match[1]);
            }
        }
    }
}

const missingInEn = Array.from(usedKeys).filter(k => !enKeys.has(k));
if (missingInEn.length > 0) {
    console.log("Missing keys in EN:", missingInEn);
} else {
    console.log("No missing keys in EN.");
}
