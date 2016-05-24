myapp.controller('loginCtrl',Controller);

    function Controller($scope, UserService,$state) {
        var vm = this;

        $scope.user = null;

        vm.loginU = loginU;

        vm.logout = logout;
        //vm.user_id= null;

/*
        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                vm.user = user;
            });
        }

*/
        function loginU(email, password) {
            if (email !== undefined && password !== undefined) {

                UserService.loginUser(email, password)
                    .then(function (res) {
                        console.log(res);
                        //vm.user_id = res.id;
                        UserService.GetCurrent(res.id).then(function (user) {
                            console.log(user);
                            $scope.user = user;
                            console.log($scope.user.display_Name);
                            $state.go('dashboard');
                        });
                        //$state.go('dashboard');
                    }, function (error) {
                        console.log(error)
                    })
            }
        }

        function logout() {

            UserService.logoutUser()
                .then(function (res) {
                    console.log(res);
                    $state.go('login');
                }, function (error) {
                    console.log(error)
                })

        }

    }
