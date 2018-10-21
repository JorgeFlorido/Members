(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', ['$http', '$q', function ($http, $q) {
            var service = {};

            service.getUsers = function () {
                var deferred = $q.defer();
                $http.get('/Member/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                    });
                return deferred.promise;
            };

            service.getUserById = function (id) {
                var deferred = $q.defer();
                $http.get('/Member/Details/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.addUser = function(user) {
                var deferred = $q.defer();
                $http.post('/Member/Create/', user).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.editUser = function (user) {
                var deferred = $q.defer();
                $http.post('/Member/Edit/', user).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteUser = function (id) {
                var deferred = $q.defer();
                $http.post('/Member/Delete/', { id: id }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
 
})();