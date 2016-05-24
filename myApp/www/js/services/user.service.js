(function () {
    'use strict';

    angular
        .module('starter')
        .factory('UserService', Service);

    function Service($http, $q) {
        var service = {};

        service.registerUser = registerUser;
        service.loginUser = loginUser;
        service.GetCurrent = GetCurrent;
        service.logoutUser = logoutUser;


        return service;

        function registerUser(displayName,user_email,user_password) {
            return $http.post('http://localhost:8080/register/' + displayName + '/' + user_email + '/' + user_password).then(handleSuccess, handleError);
        }

        function loginUser(user_email,user_password) {
            return $http.post('http://localhost:8080/login/' + user_email + '/' + user_password).then(handleSuccess, handleError);
        }

        function logoutUser() {
            return $http.get('http://localhost:8080/logout').then(handleSuccess, handleError);
        }

        function GetCurrent(id) {
            return $http.get('http://localhost:8080/current/' + id).then(handleSuccess, handleError);
        }


        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
