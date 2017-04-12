angular
	.module('schedulingEmails.create')
	.config (createConfig);

function createConfig($stateProvider) {
	$stateProvider.state({
		name: 'create',
		url: '/',
		templateUrl: '/schedulingEmails/features/create/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'CreateVM'
	})
}