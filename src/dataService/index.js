import db from './db';

export function loadData(id) {

  return db.transaction('r', db.templates, db.nodes, async () => {
    const template = await db.templates.get(id);
    const nodes = await db.nodes.where({templateId: id}).toArray();
    return { template, nodes };
  })
    .then(data => data)
    .catch(err => {
      throw err;
    });
}
