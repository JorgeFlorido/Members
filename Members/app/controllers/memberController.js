(function () {
    'use strict';

    angular
        .module('app')
        .controller('memberController', ['$scope', 'dataService', function ($scope, dataService) {
            $scope.users = [];
            getData();
            function getData() {
                dataService.getUsers().then(function (result) {
                    $scope.users = result;
                });
            }
        }])
        .controller('addMemberController', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.createUser = function (user) {
                dataService.addUser(user).then(function () {
                    $location.path('/');
                });
            };
        }]);
})();
