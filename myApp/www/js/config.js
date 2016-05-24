myapp.config(function($stateProvider, $urlRouterProvider) {


    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl',
            controllerAs: 'vm'
        })

        .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'registerCtrl',
            controllerAs: 'vm'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller:'loginCtrl',
            controllerAs:'vm'
        });

    $urlRouterProvider.otherwise('/login');



});
