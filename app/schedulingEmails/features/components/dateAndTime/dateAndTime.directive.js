angular
    .module('schedulingEmails.component.dateAndTime')
    .directive('dateAndTime', DateAndTime);

function DateAndTime() {
    return {
        restrict: 'E',
        scope: {
            datetimeData: '='
        },
        templateUrl: '/schedulingEmails/features/components/dateAndTime/dateAndTime.html',
        controller: DateAndTimeCtrl,
        controllerAs: 'DateAndTimeVM',
        bindToController: true
    }
}

function DateAndTimeCtrl($scope) {
    vm = this;

    $scope.$watch('DateAndTimeVM.date', function(value) {
        console.log(value);
    });

    $scope.$watch('DateAndTimeVM.start', function(value) {
        console.log(value);
    });

    $scope.$watch('DateAndTimeVM.end', function(value) {
        console.log(value);
    });
    
}