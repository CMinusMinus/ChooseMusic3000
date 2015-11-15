var express = require('express'),
app = express();
//bodyParser = require('body-parser');

var port = "7447";

//app.get('/submit', function(req,res) {
        //var checked;
        
        //console.log("HI");
        //res.redirect('/home');
    //});
app.get('/', function(req,res) {
        res.sendfile("./public/index.html");
    });

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;

