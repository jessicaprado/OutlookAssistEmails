var server = require('./server');
var router = require('./router');
var authHelper = require('./authHelper');
var outlook = require('node-outlook');
var path = require('path');

module.exports = {

	home: function (req, res) {
	  console.log('This is working');
	  res.sendFile(path.join(__dirname + '/test.html'));
	  // response.writeHead(200, {'Content-Type': 'text/html'});
	  // response.write('<p>Please <a href="' + authHelper.getAuthUrl() + '">sign in</a> with your Office 365 or Outlook.com account.</p>');
	  // response.end();
	}

}
