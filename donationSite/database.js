const sqlite3 = require('sqlite3').verbose();

const dbname = 'company_data.db';

const db = new sqlite3.Database(dbname, (err) => {
    if (err) {
        console.error(`Could not connect to database: ${err}`);
    } else {
        console.log(`Connected to ${dbname}`);
    }
});

module.exports = db;