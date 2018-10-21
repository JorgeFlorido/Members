(function () {
    'use strict';

    angular
        .module('app', [ 
        'ngRoute'
        ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');
            $routeProvider
                .when('/', {
                    controller: 'memberController',
                    templateUrl: '/app/templates/member.html'
                })
                .when('/adduser', {
                    controller: 'addMemberController',
                    templateUrl: '/app/templates/addMember.html'
                })
                .otherwise({ redirectTo: '/'});
        }]);
})();