(function () {
  angular
    .module('app')
    .controller('HomeController', HomeController);
    
  /**
   * The HomeController code.
   */
  function HomeController($http, $log) {
    var vm = this;
    
    /**
     * Pass in the resource URL that you're requesting.
     * 
     * Note: ADAL JS does not validate the token received from Azure AD. It relies on the app’s 
     * backend to do so, and until we call the backend, we don’t know if the user obtained an 
     * acceptable token. Business applications should have a server-side component for user 
     * authentication built into the web application for security reasons. Without this backend token 
     * validation, your app is susceptible to security attacks such as the confused deputy problem. 
     * Check out this blog post (http://www.cloudidentity.com/blog/2015/02/19/introducing-adal-js-v1/) 
     * for more information.
     */
    $http.get("https://outlook.office365.com/api/v1.0/me/messages")
      .then(function(response) {
        $log.debug('HTTP request to Mail API returned successfully.');
        vm.emails = response.data.value;
      }, function(error) {
        $log.error('HTTP request to Mail API failed.');
      });
  };
})();
