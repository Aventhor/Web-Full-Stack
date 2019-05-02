var express = require('express');
var router = express.Router();
var pool = require('../db');

router.post('/', async(req, response, next) => {
  var values = [
    req.body.name,
    req.body.author,
    req.body.img,
    req.body.description,
    req.body.price,
  ];
  console.log(values);
  const resp = await pool.query("INSERT INTO books (name, author, img, description, price) VALUES ($1, $2, $3, $4, $5);", 
  [values[0], values[1], values[2], values[3], values[4]])
  .then(function (res) {
    done()
    response.status(200)
    .json(
      {status: 'success'}   
    );
  })
  .catch(function (err) {
    return next(err);
  });
    
});

module.exports = router;
