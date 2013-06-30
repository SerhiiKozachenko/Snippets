'use strict';

// Declare app level module which depends on filters, and services
angular.module('wbserg', []).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {templateUrl: '/partials/index.html', controller: AppCtrl});
        $routeProvider.when('/index', {templateUrl: '/partials/index.html', controller: AppCtrl});
        $routeProvider.when('/onecolumn', {templateUrl: '/partials/onecolumn.html', controller: AppCtrl});
        $routeProvider.when('/threecolumn', {templateUrl: '/partials/threecolumn.html', controller: AppCtrl});
        $routeProvider.when('/twocolumn1', {templateUrl: '/partials/twocolumn1.html', controller: AppCtrl});
        $routeProvider.when('/twocolumn2', {templateUrl: '/partials/twocolumn2.html', controller: AppCtrl});
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(false);
    }]);