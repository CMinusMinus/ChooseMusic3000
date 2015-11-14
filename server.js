var express = require('express'),
app = express(),
bodyParser = require('body-parser');

var port = "7447";

app.get('/login', function(req,res) {
        app.locals.name = req.body.name;
        
        console.log("HI");
        res.redirect('/home');
    });

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;

