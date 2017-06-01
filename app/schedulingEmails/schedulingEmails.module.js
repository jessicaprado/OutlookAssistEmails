// angular
//     .module('schedulingEmails', [
//         //global dependencies
//         'ui.router',

//         //features
//         'schedulingEmails.create',
//         'schedulingEmails.login',
//     ])
//     .config(appConfig);

// function appConfig($urlRouterProvider) {
//     $urlRouterProvider.otherwise('/');
// }



(function () {
  angular.module('app', [
    'ngRoute',
    'AdalAngular'
  ])
	.config(config);
  
  // Configure the routes.
	function config($routeProvider, $httpProvider, adalAuthenticationServiceProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeController',
				controllerAs: 'home',
				requireADLogin: true
			})

			.otherwise({
				redirectTo: '/'
			});

		// The endpoints here are resources for ADAL to get tokens for.
		var endpoints = {
			'https://outlook.office365.com': 'https://outlook.office365.com'
		};
	
		// Initialize the ADAL provider with your tenant name and clientID (found in the Azure Management Portal).
		adalAuthenticationServiceProvider.init(
			{
				tenant: 'https://login.microsoftonline.com',
				clientId: 'dd753aa3-4976-404d-b947-79b79a8b891d',
				endpoints: endpoints,
				cacheLocation: 'localStorage'
			},
			$httpProvider
			);
	};
})();