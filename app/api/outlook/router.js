var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var functions = require('./functions.js');
var index = require('./index.js')
var authHelper = require('./authHelper');

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

app.get('/', function(req, res){
	functions.home();
})

app.get('/login', function(req, res){
	console.log("Hey login works");
	authHelper.getAuthUrl(); 
})

app.get("/contacts", function(req, res){
    functions.contacts();
});



module.exports = app;