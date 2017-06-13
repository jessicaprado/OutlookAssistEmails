(function () {
angular
    .module('schedulingEmails.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope, graphHelper) {
    var vm = this;

    resetView()

    function resetView() {
    	vm.shift = {
    	type: '',
    	date: '',
    	start: '',
    	end: '',
    	};
    };

    $scope.$watch('[CreateVM.shift.type, CreateVM.shift.date, CreateVM.shift.start, CreateVM.shift.end]', function(newValue, oldValue) {
    	startCT = vm.shift.date + " " + vm.shift.start;
    	console.log(startCT);
    });


  };


})(); //end of angular function