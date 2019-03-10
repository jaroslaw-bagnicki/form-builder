import Dexie from 'dexie';
import { sampleNodes, sampleForm } from './mockData';

const db = new Dexie('FormBuilder');

db.version(1).stores({
  forms: '++id',
  nodes: '++id'
});

db.open()
  .catch(err => console.log('DB open error',err));

db.nodes.clear();
// db.forms.clear();
db.nodes.bulkAdd(sampleNodes)
  .catch(err => console.log(err));
db.forms.add(sampleForm)
  .catch(err => console.log(err));

export default db;
