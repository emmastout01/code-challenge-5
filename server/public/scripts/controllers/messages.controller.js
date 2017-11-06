myApp.controller('MessageController', function($http) {
    var vm = this;
    // vm.message = {
    //     name: '',
    //     message: ''
    // }

    vm.addMessage = function(newMessage) {
        console.log('in addMessage: ', newMessage);
        $http.post('/messages', newMessage).then(function(response) {
            console.log(response);
        }).catch(function(err) {
            console.log('error!', err);
        })
    }
})