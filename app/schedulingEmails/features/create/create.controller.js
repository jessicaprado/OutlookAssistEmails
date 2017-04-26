angular
    .module('schedulingEmails.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope) {
    var vm = this;

    resetView()

    function resetView() {
    	vm.shift = {
    	type: '',
    	date: '',
    	start: '',
    	end: '',
    	};
    }

    vm.createEmail = function() {
    	console.log(vm.shift)
    }
    
   
    
}
