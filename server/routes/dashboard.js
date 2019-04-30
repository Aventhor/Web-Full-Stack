var express = require('express');
var pool = require('../db');
var router = express.Router();


router.get('/', async(req, response, next) => {
    response.setHeader("Content-Type", "application/json");
        const resp = await pool.query('SELECT * FROM public.books LIMIT 4', (err, result) => {
        //const resp = await pool.query('SELECT * FROM public.books ORDER BY RANDOM() LIMIT 1', (err, result) => {
            if(err){
                console.log(err.stack);
            } 
            response.status(200).send(result.rows)
    })
    

});
router.get('/random', async(req, response, next) => {
    response.setHeader("Content-Type", "application/json");
        const resp = await pool.query('SELECT * FROM public.books ORDER BY RANDOM() LIMIT 1', (err, result) => {
            if(err){
                console.log(err.stack);
            } 
            response.status(200).send(result.rows)
    })
    

});
module.exports = router;
