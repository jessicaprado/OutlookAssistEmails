var credentials = {
  client: {
    id: 'dd753aa3-4976-404d-b947-79b79a8b891d',
    secret: 'rnV0bvczG6ewk8qnN3cysXp',
  },
  auth: {
    tokenHost: 'https://login.microsoftonline.com',
    authorizePath: 'common/oauth2/v2.0/authorize',
    tokenPath: 'common/oauth2/v2.0/token'
  }
};
var oauth2 = require('simple-oauth2').create(credentials);

var redirectUri = 'http://localhost:3000/authorize';

// The scopes the app requires
var scopes = [ 'openid',
               'https://outlook.office.com/mail.read' ];
    
function getAuthUrl() {
  var returnVal = oauth2.authorizationCode.authorizeURL({
    redirect_uri: redirectUri,
    scope: scopes.join(' ')
  });
  console.log('Generated auth url: ' + returnVal);
  return returnVal;
}

exports.getAuthUrl = getAuthUrl;