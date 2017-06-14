"use strict";

(function () {
    angular
        .module('schedulingEmails.component.getContactFolders')
        .service('contactFolders', ContactFolders);

    function ContactFolders($http) {

        return {
            contacts: function (contactFolders) {
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