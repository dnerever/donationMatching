var express = require('express');
var router = express.Router();

const db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET test page */
router.get('/test', (req, res) => {
  db.all('SELECT * FROM company;', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(`<h1>Companies</h1><ul>${rows.map(row => `<li>${row.name} - Ratio: ${row.ratio}</li>`).join('')}</ul>`);
  });
});

module.exports = router;
