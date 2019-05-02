var express = require('express');
var router = express.Router();
var pool = require('../db');

router.delete('/:id', async(req, response, next) => {
    var id = req.params.id;
    console.log(id);
    const resp = await pool.query("DELETE FROM books WHERE id = " + id, 
    )
    .then(function (res) {
        response.status(200)
        .json({
            status: 'success',
            message: `Removed ${res.rowCount} book`
        });
     })
    .catch(function (err) {
        return next(err);
    });
    
});
router.put('/', async(req, response, next) => {
    var values = [
        req.body.name,
        req.body.author,
        req.body.img,
        req.body.description,
        req.body.price,
    ];
    console.log(values);
    var id = req.body.id;
    console.log(id);
    const resp = await pool.query("UPDATE books SET name = $1, author = $2, img = $3, description = $4, price = $5 WHERE id = $6", 
    [values[0], values[1], values[2], values[3], values[4], id])
    .then(function (res) {
        response.status(200)
        .json({
            status: 'success',
            message: `Updated book`
        });
     })
    .catch(function (err) {
        return next(err);
    });
    
});

module.exports = router;
