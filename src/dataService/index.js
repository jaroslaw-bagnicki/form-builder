import db from './db';

export const emptyTemplate = {
  slug: 'new-template',
  title: 'New Template',
  nextId: 1,
  rootNodes: [],
  nodes: []
}

export function loadTemplate(slug) {
  return db.transaction('rw', db.templates, async () => {
    // Read last template if slug hasn't been passed
    slug = slug || 'new-template'
    // Read template data
    const counter = await db.templates.where({slug: slug}).count();
    if (counter === 0) await db.templates.add(emptyTemplate);
    const data = await db.templates.where({slug: slug}).last();
    // Transform array of nodes to object of nodes
    data.nodes = data.nodes.reduce((nodes, node) => {
      nodes[node.id] = node;
      return nodes;
    }, {});
    return data;
  });
}

export function saveTemplate(data) {
  return db.transaction('rw', db.templates, async () => {
    // Transform object of nodes to array of nodes
    data.nodes = Object.values(data.nodes);
    // Save template data
    await db.templates.add(data);
    return loadTemplate(data.slug);
  });
}
