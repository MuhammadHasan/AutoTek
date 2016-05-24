
myapp.controller('registerCtrl',Controller);

function Controller($scope,UserService,$state) {
    var vm = this;

    vm.user = null;
    vm.registerU = registerU;

/*
    initController();

    function initController() {
        // get current user
        UserService.GetCurrent().then(function (user) {
            vm.user = user;
        });
    }
*/
    function registerU(username, email, password) {
        if (username !== undefined && email !== undefined && password !== undefined) {

            UserService.registerUser(username, email, password)
                .then(function (res) {
                    console.log(res);
                    $state.go('login');
                }, function (error) {
                    console.log(error)
                })
        }
    }
}
