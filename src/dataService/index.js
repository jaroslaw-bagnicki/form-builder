import db from './db';

export function loadData(id) {
  return db.transaction('r', db.templates, db.nodes, async () => {
    const template = await db.templates.get(id);
    const nodes = await db.nodes.where({templateId: id}).toArray();
    return { template, nodes };
  });
}

export function addRootNode(templateId) {
  return db.transaction('rw', db.templates, db.nodes, async () => {
    const id = await db.nodes.add({
      templateId,
      questionText: '',
      inputType: 'BOOL',
      subnodes: []
    });
    const rootNodes = (await db.templates.get(templateId)).rootNodes;
    rootNodes.push(id);
    await db.templates.update(templateId, {rootNodes});
    return id;
  });
} 
