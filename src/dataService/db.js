import Dexie from 'dexie';

const db = new Dexie('FormBuilder');

db.version(1).stores({
  inputs: '++id, type, isRoot, question, *childsInputs'
});

export default db;
