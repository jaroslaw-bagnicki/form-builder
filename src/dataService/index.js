import db from './db';

export function loadData(formId) {

  return db.transaction('r', db.nodes, db.forms, async () => {
    const form = await db.forms.get(formId);
    const nodes = await db.nodes.where({formId: 1}).toArray();
    return { nodes, form };
  })
    .then(data => data)
    .catch(err => {
      console.log(err);
      return err;
    });
}
