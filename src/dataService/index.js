import db from './db';

// Used in addSubNode()
const defaultConditon = {
  BOOL: {
    conditionType: 'EQUALS',
    conditionValue: true
  },
  NUMBER: {
    conditionType: 'EQUALS',
    conditionValue: 0
  },
  TEXT: {
    conditionType: 'EQUALS',
    conditionValue: ''
  }
};

export function loadData(id) {
  return db.transaction('r', db.templates, db.nodes, async () => {
    // Read template data
    const template = await db.templates.get(id);
    // Read nodes for specific template
    const nodes = await db.nodes.where({templateId: id}).toArray();
    return { template, nodes };
  });
}

export function addRootNode(templateId) {
  return db.transaction('rw', db.templates, db.nodes, async () => {
    // Create new root node
    const id = await db.nodes.add({
      templateId,
      questionText: '',
      inputType: 'BOOL',
      subnodes: []
    });
    // Read rootNodes list
    const rootNodes = (await db.templates.get(templateId)).rootNodes;
    // Update rootNodes list
    await db.templates.update(templateId, {rootNodes: rootNodes.concat(id)});
    return id;
  });
}

export function addSubNode(nodeId) {
  return db.transaction('rw', db.nodes, async () => {
    // Read parent node
    const { inputType, templateId, subnodes } = await db.nodes.get(nodeId);
    // Create new node
    const id = await db.nodes.add({
      templateId,
      ...defaultConditon[inputType],
      questionText: '',
      inputType: 'BOOL',
      subnodes: []
    });
    // Update parent node subnodes list
    await db.nodes.update(nodeId, {subnodes: subnodes.concat(id)});
    return id;
  });
} 
