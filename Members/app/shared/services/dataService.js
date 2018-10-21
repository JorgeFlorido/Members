(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', ['$http', '$q', function ($http, $q) {
            var service = {};

            service.GetUsers = function () {
                var deferred = $q.defer();
                $http.get('/Member/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                    });
                return deferred.promise;
            };

            return service;
        }]);
 
})();