angular
    .module('schedulingEmails', [
        //global dependencies
        'ui.router',

        //features
        'schedulingEmails.create',
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}