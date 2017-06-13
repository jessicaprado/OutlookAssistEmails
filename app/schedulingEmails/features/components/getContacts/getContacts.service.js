"use strict";

(function () {
    angular
        .module('schedulingEmails.component.graphHelper')
        .service('GetContacts', GetContacts);

    function GetContacts($http) {
        return {
            contacts: function () {
                return $http.get('https://graph.microsoft.com/me/contacts/')
            }
        }
    }
})();