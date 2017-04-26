angular
    .module('schedulingEmails.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope) {
    var vm = this;

    $scope.$watch('CreateVM.shift', function(newValue, oldValue) {
  		console.log(vm.shift)
	});

    vm.shift = {
    	type: '',
    	date: '',
    	start: '',
    	end: '',
    };

    
}
