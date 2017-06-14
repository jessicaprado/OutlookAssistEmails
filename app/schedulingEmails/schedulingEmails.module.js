(function () {
	angular
		.module('schedulingEmails', [
			//global dependencies
			'ui.router',
            'moment-picker',

			//features
			'schedulingEmails.create',

		])
		.config(appConfig);

	function appConfig($urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
	}
})();