import db from './db';

export function loadData() {

  return db.transaction('r', db.nodes, db.forms, async () => {
    const nodes = await db.nodes.toArray();
    const form = await db.forms.get(1);
    return { nodes, form };
  })
    .then(data => data)
    .catch(err => console.log(err));
}
