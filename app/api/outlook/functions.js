var server = require('./../../../server');
var router = require('./router');
var authHelper = require('./authHelper');
var outlook = require('node-outlook');
var path = require('path');
var http = require('http');

module.exports = {

	home: function (req, res) {
	  console.log(res);
	  res.sendFile('/test.html', {root: __dirname});
	  // response.writeHead(200, {'Content-Type': 'text/html'});
	  // response.write('<p>Please <a href="' + authHelper.getAuthUrl() + '">sign in</a> with your Office 365 or Outlook.com account.</p>');
	  // response.end();
	},

	contacts: function (req, res) {
    var token = getValueFromCookie('node-tutorial-token', request.headers.cookie);
    //console.log('Token found in cookie: ', token);
    var email = getValueFromCookie('node-tutorial-email', request.headers.cookie);
    //console.log('Email found in cookie: ', email);
    if (token) {

        outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');

        // Set up oData parameters
        var queryParams = {
            '$select': 'EmailAddresses',
            '$orderby': 'CreatedDateTime desc',
            '$top': 2
        };

        //var contactFolderId = "test";

        outlook.contacts.getContacts({token: token, odataParams: queryParams, },
            function(error, result){
                if (error) {
                    console.log('getContacts returned an error: ' + error);
                }
                else if (result) {
                  console.log(result);
                    console.log('getContacts returned ' + result.value.length + ' contacts.');
                    result.value.forEach(function(contact) {
                        console.log('  Email Address:', contact.EmailAddresses[0] ? contact.EmailAddresses[0].Address : "NONE");
                    });
                }
            });
    } else {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<p> No token found in cookie!</p>');
        response.end();
    }
}

}