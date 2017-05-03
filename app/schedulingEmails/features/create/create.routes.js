angular
	.module('schedulingEmails.create')
	.config (createConfig);

function createConfig($stateProvider) {
	$stateProvider.state({
		name: 'create',
		url: '/create',
		templateUrl: '/schedulingEmails/features/create/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'CreateVM'
	})
}