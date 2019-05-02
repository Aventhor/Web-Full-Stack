var express = require('express');
var router = express.Router();
var pool = require('../db');


router.get('/:name', async(req, response, next) => {

    var searchKeywords = req.param.name; 
    response.setHeader("Content-Type", "application/json");
    const resp = await pool.query('SELECT * FROM public.books WHERE name = ' + searchKeywords, (err, result) => {
        if(err){
            console.log(err.stack);
        } 
        response.status(200).send(result.rows)
    })
    console.log(searchKeywords);
    
});

module.exports = router;
