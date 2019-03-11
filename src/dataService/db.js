import Dexie from 'dexie';
import { sampleTemplate, sampleNodes } from './mockData';

const db = new Dexie('FormBuilder');

db.version(1).stores({
  templates: '++id',
  nodes: '++id, templateId'
});

// Sample data setup
db.transaction('rw', db.nodes, db.templates, async () => {
  await db.templates.delete(1);
  await db.templates.add(sampleTemplate);
  await db.nodes.where({templateId: 1}).delete();
  await db.nodes.bulkAdd(sampleNodes);
})
  .then(() => console.log('DB: Sample data reseted.'))
  .catch(err => console.log(err));

export default db;
