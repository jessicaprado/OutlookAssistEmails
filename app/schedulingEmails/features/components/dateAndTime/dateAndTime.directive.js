angular
    .module('schedulingEmails.component.dateAndTime')
    .directive('dateAndTime', DateAndTime);

function DateAndTime() {
    return {
        restrict: 'E',
        scope: {
            emailData: '='
        },
        templateUrl: '/schedulingEmails/features/components/dateAndTime/dateAndTime.html',
        controller: DateAndTimeCtrl,
        controllerAs: 'DateAndTimeVM',
        bindToController: true
    }
}

function DateAndTimeCtrl($scope) {
    vm = this;

    
}