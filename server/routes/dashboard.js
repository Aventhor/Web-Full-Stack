var express = require('express');
var pool = require('../db');
var router = express.Router();


router.get('/', async(req, response, next) => {
    response.setHeader("Content-Type", "application/json");
    const resp = await pool.query('SELECT * FROM public.books', (err, result) => {
        if(err){
            console.log(err.stack);
        } 
        response.status(200).send(result.rows)
    })
    

});

module.exports = router;
