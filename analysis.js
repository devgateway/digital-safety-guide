const fs = require('fs');
try {
    const data = JSON.parse(fs.readFileSync('server/data/logicTrees.json', 'utf8'));
    const tree = data.LOGIC_TREES.UNIFIED_FLOW;
    const incoming = {};
    Object.entries(tree.nodes).forEach(([id, node]) => {
        if (node.options) {
            node.options.forEach(opt => {
                if (!incoming[opt.nextId]) incoming[opt.nextId] = [];
                incoming[opt.nextId].push(id);
            });
        }
    });
    Object.entries(incoming).forEach(([id, parents]) => {
        if (parents.length > 1) {
            console.log(`${id}: ${parents.join(', ')}`);
        }
    });
} catch (e) {
    console.error(e);
}
