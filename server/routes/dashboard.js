var express = require('express');
var router = express.Router();

var books = [
    { name: 'Anything', author: 'Jonh Wick' },
    { name: 'What is love?', author: 'Ann Leen' }
];

router.get('/', function(req, res, next) {
    res.send(books);
    console.log("hello there!")
    
});

module.exports = router;
