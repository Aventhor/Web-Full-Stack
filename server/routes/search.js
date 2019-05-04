var express = require('express');
var router = express.Router();
var pool = require('../db');


router.get('/', async(req, response, next) => {
    var searchKeywords = req.query.name;
    console.log(searchKeywords);
    const resp = await pool.query('SELECT * FROM books WHERE name LIKE $1', ['%' + searchKeywords + '%'])
        .then(function (data) {
            response.status(200)
              .json(
                data.rows,
              );
              console.log(data.rows);
        })
        .catch(function (err) {
        response.status(400).json({
            status: 'fail',
            message: 'dsd'
        });
        return next(err);
    });
    
});

module.exports = router;
