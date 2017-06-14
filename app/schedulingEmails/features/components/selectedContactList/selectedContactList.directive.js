angular
    .module('schedulingEmails.component.selectedContactList')
    .directive('mailingList', MailingList);

function MailingList() {
    return {
        restrict: 'E',
        scope: {
            contactData: '='
        },
        templateUrl: '/schedulingEmails/features/components/selectedContactList/selectedContactList.html',
        controller: SelectedContactsCtrl,
        controllerAs: 'SelectedContactsVM',
        bindToController: true
    }
}

function SelectedContactsCtrl($scope) {
    vm = this;

    vm.mailList = '';

    $scope.$watch('SelectedContactsVM.mailList', function(value) {
        vm.mailList = value;
        console.log(vm.mailList);
    });
//this sets the value in the watch function, but does not actually set it.
// Make sure when the send button is hit, you puch this value to it's variable and make the correct http call
}