angular
    .module('schedulingEmails.component.mailingList')
    .directive('mailingList', MailingList);

function MailingList() {
    return {
        restrict: 'E',
        scope: {
            emailData: '='
        },
        templateUrl: '/schedulingEmails/features/components/mailingList/mailingList.html',
        controller: MailingCtrl,
        controllerAs: 'MailingVM',
        bindToController: true
    }
}

function MailingCtrl($scope) {
    vm = this;

    vm.mailList = '';

    $scope.$watch('MailingVM.mailList', function(value) {
        console.log(value);
    });

}