var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var contacts = require('./getContacts.js');
var home = require('./home.js');
var index = require('./index.js')

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));



app.get('/', function(req, res){
	home.home();
})

app.get("/contacts", function(req, res){
    
    console.log("Contacts");
});



module.exports = app;