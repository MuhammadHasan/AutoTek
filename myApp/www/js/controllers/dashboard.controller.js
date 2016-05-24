myapp.controller('dashboardCtrl',Controller);

function Controller($scope, UserService,$state) {
    var vm = this;

    vm.user = null;

    //vm.logout = logout;



    //vm.id = loginCtrl.id;

    initController();

    function initController() {
        // get current user

        UserService.GetCurrent().then(function (user) {
            vm.user = user;
            console.log(vm.user);
        });
    }

    function logout(email) {

        UserService.logoutUser(email)
            .then(function (res) {
                console.log(res);
                $state.go('login');
            }, function (error) {
                console.log(error)
            })

    }

}
