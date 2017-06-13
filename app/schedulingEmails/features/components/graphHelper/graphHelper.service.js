"use strict";

(function () {
  angular
    .module('schedulingEmails.component.graphHelper')
    .service('GraphHelper', GraphHelper);


  function GraphHelper($http) {
      // Initialize the auth request.
      hello.init( {
        aad: clientId // from public/scripts/config.js
        }, {
        redirect_uri: redirectUrl,
        scope: graphScopes
      });

      return {

        // Sign in and sign out the user.
        login: function login() {
          hello('aad').login({
            display: 'page',
            state: 'abcd'
          });
        },
        logout: function logout() {
          hello('aad').logout();
          delete localStorage.auth;
          delete localStorage.user;
        },

        // Get the profile of the current user.
        me: function me() {
          return $http.get('https://graph.microsoft.com/v1.0/me');
        },

        // Send an email on behalf of the current user.
        sendMail: function sendMail(email) {
          return $http.post('https://graph.microsoft.com/v1.0/me/sendMail', { 'message' : email, 'saveToSentItems': true });        
        },

        //Grab Contacts of user
        contacts: function contacts() {
            return $http.get('https://graph.microsoft.com/v1.0/me/contactfolders');
        }
      }
    };
})();