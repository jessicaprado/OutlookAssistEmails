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
        vm.mailList = value;
        console.log(vm.mailList);
    });
//this sets the value in the watch function, but does not actually set it.
// Make sure when the send button is hit, you puch this value to it's variable and make the correct http call
}