(function () {
angular
    .module('schedulingEmails.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl(contactFolders) {
    var vm = this;

    vm.contactFolder = [];

    contactFolders.contacts(vm.contactFolder );
    console.log(vm.contactFolder);




  //   POST https://graph.microsoft.com/v1.0/me/sendMail
  //       Content-type: application/json
  //   Content-length: 512
  //
  //   {
  //       "message": {
  //       "from": {"@odata.type": "microsoft.graph.recipient"},
  //       "sender": {"@odata.type": "microsoft.graph.recipient"},
  //       "subject": "Assist Needed for",
  //           "body": {
  //           "contentType": "Text",
  //               "content": "The new cafeteria is open."
  //       },
  //       "toRecipients": [
  //           {
  //               "emailAddress": {
  //                   "address": "fannyd@contoso.onmicrosoft.com"
  //               }
  //           }
  //       ],
  //           "ccRecipients": [
  //           {
  //               "emailAddress": {
  //                   "address": "dfap.scheduler@disney.com"
  //               }
  //           }
  //       ]
  //   },
  //       "saveToSentItems": "true"
  //   }
  //
  //
  // };


})(); //end of angular function