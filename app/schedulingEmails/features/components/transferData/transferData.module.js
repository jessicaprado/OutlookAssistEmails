(function () {
    angular
       .module('schedulingEmails.component.transferData')
       .service('transfer', TransferService);

   function TransferService($http) {
        return {
            sendData: function(transfer) {
                $htpp({
                    method: 'POST',
                    url: 'api/emails',
                    data: transfer
                }).then(function (res) {
                    console.log(res)
                })
            }
        }
   }
})()