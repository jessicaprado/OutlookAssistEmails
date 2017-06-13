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
        controller: MailingListCtrl,
        controllerAs: 'MailingListVM',
        bindToController: true
    }
}

function MailingListCtrl() {

}