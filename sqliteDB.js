const sql = require('sqlite3').verbose();
const path = require('node:path');

const db = new sql.Database(
  path.join(__dirname, 'db', 'dog.json'),
  sql.OPEN_CREATE,
  (err) => {
    if (err) throw err.message;
    console.log('Connected to in-memory database');
  }
);

db.close((err) => {
  if (err) throw err.message;
  console.log('close the database connection');
});
