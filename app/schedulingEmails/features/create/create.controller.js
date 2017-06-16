(function () {
angular
    .module('schedulingEmails.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl(contactFolders) {
    var vm = this;

    vm.contactFolder = [];

    contactFolders.contacts(vm.contactFolder );
    console.log(vm.contactFolder);

}

})(); //end of angular function