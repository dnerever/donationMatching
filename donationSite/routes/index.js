var express = require('express');
var router = express.Router();

const db = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET test page */
router.get('/table', (req, res) => {
  db.all('SELECT * FROM company;', [], (err, rows) => {
    if (err) {
      throw err;
    }
    // res.send(`<h1>Companies</h1><ul>${rows.map(row => `<li>${row.name} - Ratio: ${row.ratio}</li>`).join('')}</ul>`);
    res.render('index', { title: 'Test', companies: rows});
  });
});

router.get('/contribute', (req, res) => {
  
  res.render('insert', {})
})


router.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // do something
  console.log(`Name: ${name}`);
  res.send('Math info successfully submitted!');
});

module.exports = router;
