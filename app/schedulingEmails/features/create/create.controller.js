angular
    .module('schedulingEmails.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl() {
    var vm = this;

    vm.shift = {
    	'type': ''
    }  

    console.log(vm.shift);
}
