angular
	.module('schedulingEmails.component.emailContent')
	.directive('emailContent', EmailContent);

function EmailContent() {
	return {
		restrict: 'E',
		scope: {
			emailData: '='
		},
		templateUrl: '/schedulingEmails/features/components/emailContent/emailContent.html',
		controller: EmailContentCtrl,
		controllerAs: 'EmailContentVM',
		bindToController: true
	}
}

function EmailContentCtrl() {
	
}