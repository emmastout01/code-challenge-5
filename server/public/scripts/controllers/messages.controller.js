myApp.controller('MessageController', function($http) {
    var vm = this;
    // vm.message = {
    //     name: '',
    //     message: ''
    // }

    vm.messages = [];

    vm.addMessage = function(newMessage) {
        console.log('in addMessage: ', newMessage);
        $http.post('/messages', newMessage).then(function(response) {
            console.log(response);
            vm.getMessages();
        }).catch(function(err) {
            console.log('error!', err);
        })
    }

    vm.getMessages = function() {
        $http.get('/messages').then(function(response) {
            vm.messages = response.data;
            console.log('get route data: ', vm.messages);
        });
    }

    vm.getMessages();
});