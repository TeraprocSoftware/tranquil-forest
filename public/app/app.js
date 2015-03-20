angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {auth: function(tpAuth) {
            return tpAuth.authorizeCurrentUserForRoute('admin')
        }},
        user: {auth: function(tpAuth) {
            return tpAuth.authorizeAuthenticatedUserForRoute()
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
        .when('/profile', { templateUrl: '/partials/account/profile',
            controller: 'tpProfileCtrl', resolve: routeRoleChecks.user
        })
        .when('/plan', { templateUrl: '/partials/main/plan',
            controller: 'tpPlanCtrl', resolve: routeRoleChecks.user
        })
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
})


