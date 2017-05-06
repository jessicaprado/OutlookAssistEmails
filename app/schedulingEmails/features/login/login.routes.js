angular
	.module('schedulingEmails.login')
	.config (loginConfig);

function loginConfig($stateProvider) {
	$stateProvider.state({
		name: 'login',
		url: '/',
		templateUrl: '/schedulingEmails/features/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'LoginVM'
	})
}