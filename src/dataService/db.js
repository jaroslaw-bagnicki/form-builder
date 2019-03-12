import Dexie from 'dexie';
import { sampleTemplate } from './mockData';

const db = new Dexie('FormBuilder');

db.version(1).stores({
  templates: '++, slug',
  settings: ''
});

// Sample data setup
db.transaction('rw', db.templates, db.settings, async () => {
  await db.templates.where({slug: 'sample-template'}).delete();
  await db.templates.add(sampleTemplate);
  await db.settings.put(sampleTemplate.slug, 'lastTemplate');
})
  .then(() => console.log('DB: Sample data setup.'))
  .catch(err => console.log(err));

export default db;
