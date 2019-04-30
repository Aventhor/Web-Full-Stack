var express = require('express');
var router = express.Router();
var pool = require('../db');


router.get('/:id', async(req, response, next) => {
    response.setHeader("Content-Type", "application/json");
    const resp = await pool.query('SELECT * FROM public.books WHERE id = ' + req.params.id, (err, result) => {
        if(err) {
            console.log(err.stack);
        } 
        var str = result.rows[0];
        response.status(200).json(str);
    })
    console.log("getting book by id, id = " + req.params.id);
    
});

module.exports = router;
