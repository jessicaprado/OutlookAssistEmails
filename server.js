// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
var http = require('http');
var url = require('url');


  
//   var port = 8000;
//   http.createServer(onRequest).listen(port);
//   console.log('Server has started. Listening on port: ' + port + '...');
// }

// exports.start = start;

var express = require('express');
var app = express();
var bodyParser = require('body-parser')
PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/app'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

function start(route, handle) {
  function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Request for ' + pathName + ' received.');
    route(handle, pathName, response, request);
  }

app.listen(PORT, function() {
    console.log ("Listening in on PORT " + PORT);
})