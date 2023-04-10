const sql = require('sqlite3').verbose();
const path = require('node:path');

const db = new sql.Database(path.join(__dirname, 'db', 'chinook.db'));
const sqlQuery = `SELECT DISTINCT Name name FROM playlists
           ORDER BY name`;
db.all(sqlQuery, [], (err, rows) => {
  if (err) throw err;
  rows.forEach((row) => {
    console.log(row.name);
  });
});

db.close((err) => {
  if (err) throw err.message;
  console.log('close the database connection');
});
