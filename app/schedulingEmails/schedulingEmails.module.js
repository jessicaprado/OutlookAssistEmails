angular
    .module('schedulingEmails', [
        //global dependencies
        'ui.router',

        //features
        'schedulingEmails.create',
        'schedulingEmails.login',
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}