(function () {
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
    };

    $scope.$watch('[CreateVM.shift.type, CreateVM.shift.date, CreateVM.shift.start, CreateVM.shift.end]', function(newValue, oldValue) {
    	startCT = vm.shift.date + " " + vm.shift.start;
    	console.log(startCT);
    });

    $http.get("https://outlook.office365.com/api/v1.0/me/messages")
      .then(function(response) {
        $log.debug('HTTP request to Mail API returned successfully.');
        vm.emails = response.data.value;
      }, function(error) {
        $log.error('HTTP request to Mail API failed.');
      });
  };


})(); //end of angular function