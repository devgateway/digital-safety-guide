const fs = require('fs');
const path = require('path');

const localesPath = path.join(__dirname, 'client/src/locales');
const enLocalesPath = path.join(localesPath, 'en');

const langs = fs.readdirSync(localesPath).filter(f => fs.statSync(path.join(localesPath, f)).isDirectory() && f !== 'en');
const enFiles = fs.readdirSync(enLocalesPath).filter(f => f.endsWith('.json'));

let addedKeys = [];

function getValue(obj, pathArr) {
    let curr = obj;
    for (let p of pathArr) {
        if (!curr) return undefined;
        curr = curr[p];
    }
    return curr;
}

function setValue(obj, pathArr, value) {
    let curr = obj;
    for (let i = 0; i < pathArr.length - 1; i++) {
        if (!curr[pathArr[i]]) curr[pathArr[i]] = {};
        curr = curr[pathArr[i]];
    }
    curr[pathArr[pathArr.length - 1]] = value;
}

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
    const enFilePath = path.join(enLocalesPath, file);
    const enData = JSON.parse(fs.readFileSync(enFilePath, 'utf8'));
    const enKeys = traverse(enData);

    for (let lang of langs) {
        const langFilePath = path.join(localesPath, lang, file);
        let langData = {};
        if (fs.existsSync(langFilePath)) {
            langData = JSON.parse(fs.readFileSync(langFilePath, 'utf8'));
        }

        let updated = false;
        for (let key of enKeys) {
            const pathArr = key.split('.');
            let enVal = getValue(enData, pathArr);
            let targetVal = getValue(langData, pathArr);

            if (targetVal === undefined) {
                // missing key
                setValue(langData, pathArr, "[TRANSLATE] " + enVal);
                updated = true;
                addedKeys.push({ lang, file, key, val: enVal });
            } else if (typeof targetVal === 'string' && typeof enVal === 'string' && targetVal === enVal && enVal.length > 10 && !enVal.startsWith('[TRANSLATE]')) {
                // it's identical to English (and not a tiny generic word)
                setValue(langData, pathArr, "[TRANSLATE] " + enVal);
                updated = true;
                addedKeys.push({ lang, file, key, val: enVal });
            } else if (typeof targetVal === 'string' && targetVal.startsWith('[TRANSLATE] ')) {
                // previously tagged, keep track of it to show the user
                addedKeys.push({ lang, file, key, val: targetVal.replace('[TRANSLATE] ', '') });
            }
        }

        if (updated) {
            fs.writeFileSync(langFilePath, JSON.stringify(langData, null, 4));
        }
    }
}

// Group by language and file for the report
const grouped = {};
for (let { lang, file, key, val } of addedKeys) {
    if (!grouped[lang]) grouped[lang] = {};
    if (!grouped[lang][file]) grouped[lang][file] = [];
    grouped[lang][file].push({ key, val });
}

// Write the missing keys report to a markdown file
const reportLines = ["# Untranslated Entries Report", ""];
reportLines.push("These entries were missing or strictly matched the English value and have been prepended with `[TRANSLATE] ` in the respective locale files.", "");

if (addedKeys.length > 0) {
    for (let lang in grouped) {
        reportLines.push(`## ${lang.toUpperCase()}`);
        for (let file in grouped[lang]) {
            reportLines.push(`### ${file}`);
            for (let { key, val } of grouped[lang][file]) {
                reportLines.push(`- \`${key}\` -> "${val}"`);
            }
            reportLines.push('');
        }
    }
} else {
    reportLines.push("No missing or English-copied translations found.");
}

fs.writeFileSync(path.join(__dirname, 'missing_translations_report.md'), reportLines.join('\n'));

console.log(`Report generated with ${addedKeys.length} untranslated keys marked/found.`);
