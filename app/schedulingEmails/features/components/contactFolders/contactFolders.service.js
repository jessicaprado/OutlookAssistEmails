"use strict";

(function () {
    angular
        .module('schedulingEmails.component.contactFolders')
        .service('contactFolders', ContactFolders);

    function ContactFolders($http) {

        return {
            contacts: function () {
                $http({
                    method: 'GET',
                    url: 'https://graph.microsoft.com/v1.0/me/contactfolders'
                }).then(function (response) {
                    response.data.value.forEach(function (element) {
                        contactFolders.push(element)
                    });
                })
            }
        }
    }
})();

// function contacts() {
//     GraphHelper.contacts().then(function (res) {
//         folderData = res.data.value;
//         folderData.forEach(function (element) {
//             (vm.contactFolder).push ({
//                 name: element.displayName,
//                 id: element.id
//             });
//         })
//         console.log(vm.contactFolder);
//
//     })
// }