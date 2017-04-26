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

    $scope.$watch('[CreateVM.shift.type, CreateVM.shift.date, CreateVM.shift.start, CreateVM.shift.end]', function(newValue, oldValue) {
    	
    	startCT = vm.shift.start;
    	startCT = moment(startCT).subtract(1, 'hour');
    	console.log(startCT);
    })
   
    
}
