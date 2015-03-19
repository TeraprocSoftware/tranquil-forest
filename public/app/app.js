angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function(tpAuth) {
            return tpAuth.authorizeCurrentUserForRoute('admin')
        }}
    }
    $locationProvider.html5Mode(true);
    $routeProvider
       .when('/', { templateUrl: '/partials/main/main', controller: 'tpMainCtrl'})
       .when('/admin/users', { templateUrl: '/partials/admin/user-list',
            controller: 'tpUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', { templateUrl: '/partials/account/signup',
            controller: 'tpSignupCtrl'
        })
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
})


