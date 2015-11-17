var express = require('express'),
app = express();
bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var port = "7447";

app.locals.artistCount = 10;
app.get('/', function(req,res) {
        res.sendfile("./public/views/index.html");
    });

app.get('/submit', function(req,res) {
        app.locals.results = req.query;
        var toArray = Object.keys(app.locals.results)
          .map(function(k)
               {
                  return app.locals.results[k];
                });
        app.locals.results = toArray;
        res.redirect('/results');
    });

app.get('/results', function(req,res) {
        res.sendfile("./public/views/submitted.html");
    });
app.post('/results', function(req,res) {
        var element = req.body.createElement("p");
        var textNode = req.body.createTextNode(app.locals.results[0]);
        element.appendChild(textNode);
        req.body.appendChild(element);
    });

app.listen(port);
console.log('Magic happens on port ' + port);
exports = module.exports = app;

