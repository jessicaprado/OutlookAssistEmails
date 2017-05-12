var express = require('express');
var app = express();
var bodyParser = require('body-parser');
PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/app/api/outlook'));
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));

//required js for routes
var routes = require('./outlook/routes');
app.use('/', routes);

app.listen(PORT, function() {
    console.log ("Listening in on PORT " + PORT);
})