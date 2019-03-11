import db from './db';

export function loadTemplate(slug) {
  return db.transaction('r', db.settings, db.templates, async () => {
    // Read last template if slug hasn't been passed
    if (!slug) slug = await db.settings.get('lastTemplate');
    // Read template data
    return db.templates.where({slug: slug}).last();
  });
}

// export function addRootNode(templateId) {
//   return db.transaction('rw', db.templates, db.nodes, async () => {
//     // Create new root node
//     const id = await db.nodes.add({
//       templateId,
//       questionText: '',
//       inputType: 'BOOL',
//       subnodes: []
//     });
//     // Read rootNodes list
//     const rootNodes = (await db.templates.get(templateId)).rootNodes;
//     // Update rootNodes list
//     await db.templates.update(templateId, {rootNodes: rootNodes.concat(id)});
//     return id;
//   });
// }

// export function addSubNode(nodeId) {
//   return db.transaction('rw', db.nodes, async () => {
//     // Read parent node
//     const { inputType, templateId, subnodes } = await db.nodes.get(nodeId);
//     // Create new node
//     const id = await db.nodes.add({
//       templateId,
//       ...defaultConditon[inputType],
//       questionText: '',
//       inputType: 'BOOL',
//       subnodes: []
//     });
//     // Update parent node subnodes list
//     await db.nodes.update(nodeId, {subnodes: subnodes.concat(id)});
//     return id;
//   });
// } 
