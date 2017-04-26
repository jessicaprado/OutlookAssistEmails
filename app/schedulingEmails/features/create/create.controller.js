angular
    .module('schedulingEmails.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope) {
    var vm = this;

    vm.shift = {
    	type: '',
    	date: '',
    	start: '',
    	end: '',
    };

    var startCT = vm.shift.start;
    
    console.log(startCT);
    
}
