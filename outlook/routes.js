// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var functions = require('./functions.js');
// //var index = require('./index.js')
// var authHelper = require('./authHelper');
// var path = require('path');
// var url = require('url');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.text({ type: 'text/html' }));

// app.get('/', function(req, res){
// 	res.sendFile(path.join(__dirname + '/../app/index.html'));
// });

// app.get('/login', function(req, res){
// 	authHelper.getAuthUrl();
// });

// app.get('/authorize', function(req, res){
// 	console.log('Request handler \'authorize\' was called.');
//   	// The authorization code is passed as a query parameter
//   	var url_parts = url.parse(req.url, true);
//   	var code = url_parts.query.code;
//   	console.log('Code: ' + code);
//   	authHelper.getTokenFromCode(code, tokenReceived, response);
// })

// app.get("/contacts", function(req, res){
//     console.log("contacts recieved")
// });



// module.exports = app;