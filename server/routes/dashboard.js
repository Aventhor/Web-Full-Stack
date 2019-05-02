var express = require('express');
var pool = require('../db');
var router = express.Router();


router.get('/', async(req, response, next) => {
    response.setHeader("Content-Type", "application/json");
    const resp = await pool.query('SELECT * FROM books LIMIT 4', (err, result) => {
        if(err){
            console.log(err.stack);
        } 
        response.status(200).send(result.rows)
    })
    

});
router.get('/random', async(req, response, next) => {
    response.setHeader("Content-Type", "application/json");
    const resp = await pool.query('SELECT * FROM books ORDER BY RANDOM() LIMIT 2', (err, result) => {
        if(err){
            console.log(err.stack);
        } 
        response.status(200).send(result.rows)
    })
    

});
module.exports = router;
