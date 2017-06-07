var express = require('express');
var app = express();
var path = require('path'); 

// Initialize variables. 
var PORT = process.env.PORT || 8000; 


// Start the server.  
app.listen(PORT, function() {
	console.log("Now creeping on " + PORT)
});