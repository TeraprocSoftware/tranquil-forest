angular.module('app', ['ngResource', 'ngRoute', 'tpServices']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
       .when('/', { templateUrl: '/partials/main', controller: 'tpMainCtrl'});

});
