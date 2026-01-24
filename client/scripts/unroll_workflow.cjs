const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SOURCE_PATH = path.join(__dirname, '../src/data/logicTrees.json');
const DEST_PATH = path.join(__dirname, '../public/data/logicTrees.json');
const MAP_PATH = path.join(__dirname, '../public/data/urlMap.json');

function generateShortCode(input) {
    const hash = crypto.createHash('md5').update(input).digest('hex').toUpperCase();
    return `${hash.substring(0, 3)}-${hash.substring(3, 6)}`;
}

try {
    const data = JSON.parse(fs.readFileSync(SOURCE_PATH, 'utf8'));
    const sourceTree = data.LOGIC_TREES.UNIFIED_FLOW;

    // New tree structure
    const newNodes = {};
    const queue = []; // Format: { sourceId, newId, parentNewId }
    const reservedIds = new Set(); // Track IDs assigned to future nodes to prevent collision

    // Initialize with start node
    queue.push({
        sourceId: sourceTree.start,
        newId: sourceTree.start,
        parentNewId: null
    });
    reservedIds.add(sourceTree.start);

    while (queue.length > 0) {
        const { sourceId, newId, parentNewId } = queue.shift();

        // Get original node content
        const sourceNode = sourceTree.nodes[sourceId];
        if (!sourceNode) {
            console.error(`Node not found: ${sourceId}`);
            continue;
        }

        // Create new node copy
        const newNode = JSON.parse(JSON.stringify(sourceNode));
        newNode.id = newId;
        newNode.parentId = parentNewId; // Add back-reference for "Back" button

        // Process options and generate nextIds
        if (newNode.options) {
            newNode.options = newNode.options.map(opt => {
                const nextSourceId = opt.nextId;

                let childNewId = nextSourceId;
                // Check if ID is already reserved for another node (OR already exists)
                if (reservedIds.has(childNewId)) {
                    // Collision! Derive a new name.
                    let counter = 2;
                    while (reservedIds.has(`${childNewId}_${counter}`)) {
                        counter++;
                    }
                    childNewId = `${childNewId}_${counter}`;
                }

                reservedIds.add(childNewId);
                queue.push({
                    sourceId: nextSourceId,
                    newId: childNewId,
                    parentNewId: newId
                });

                return { ...opt, nextId: childNewId };
            });
        }

        newNodes[newId] = newNode;
    }

    // Generate Code Map
    const urlMap = { codes: {}, ids: {} };
    const usedCodes = new Set();

    Object.keys(newNodes).forEach(nodeId => {
        let code = generateShortCode(nodeId);

        let suffix = 0;
        while (usedCodes.has(code)) {
            suffix++;
            code = generateShortCode(nodeId + suffix); // Perturb input
        }

        usedCodes.add(code);
        urlMap.codes[code] = nodeId;
        urlMap.ids[nodeId] = code;
    });


    // Reconstruct full JSON
    const newData = {
        TOPICS: data.TOPICS,
        LOGIC_TREES: {
            UNIFIED_FLOW: {
                start: sourceTree.start,
                nodes: newNodes
            }
        }
    };

    // Ensure dir exists
    const destDir = path.dirname(DEST_PATH);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    fs.writeFileSync(DEST_PATH, JSON.stringify(newData, null, 4));
    fs.writeFileSync(MAP_PATH, JSON.stringify(urlMap, null, 4));

    console.log(`Unrolled workflow saved to ${DEST_PATH}`);
    console.log(`URL Map saved to ${MAP_PATH}`);
    console.log(`Total nodes: ${Object.keys(newNodes).length}`);

} catch (err) {
    console.error('Error unrolling workflow:', err);
    process.exit(1);
}
