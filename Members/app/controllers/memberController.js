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
                    toastr.success('Member created successfully');
                    $location.path('/');
                }, function() {
                    toastr.error('Ooops, something went wrong');
                });
            };
        }]);
})();
