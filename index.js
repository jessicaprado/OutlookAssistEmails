var server = require('./server/server');
var router = require('./routes/router');
var authHelper = require('./config/authHelper');

var handle = {};
handle['/'] = home;
handle['/authorize'] = authorize;

server.start(router.route, handle);

function home(response, request) {
  console.log('Request handler \'home\' was called.');
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write('<p>Please <a href="' + authHelper.getAuthUrl() + '">sign in</a> with your Office 365 or Outlook.com account.</p>');
  response.end();
}