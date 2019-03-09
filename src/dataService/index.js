import db from './db';

export function loadInputs() {
  return db.inputs
    .then(data => data)
    .catch(err => console.log(err));
}
