import Dexie from 'dexie';
import { sampleNodes, sampleForm } from './mockData';

const db = new Dexie('FormBuilder');

db.version(1).stores({
  forms: '++id',
  nodes: '++id, formId'
});

// Sample data setup
db.transaction('rw', db.nodes, db.forms, async () => {
  await db.forms.delete(1);
  await db.forms.add(sampleForm);
  await db.nodes.where({formId: 1}).delete();
  await db.nodes.bulkAdd(sampleNodes);
})
  .then(() => console.log('DB: Sample data reseted.'))
  .catch(err => console.log(err));

export default db;
