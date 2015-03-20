angular.module('app').controller('tpNavBarLoginCtrl', function($scope, $http, tpIdentity, tpNotifier, tpAuth, $location) {
    $scope.identity = tpIdentity;

    $scope.signin = function(username, password) {
        tpAuth.authenticateUser(username, password).then(function(success) {
            if(success) {
                tpNotifier.notify('You have successfully signed in!');
                $location.path('/overview');
            } else {
                tpNotifier.notify('Username or Password is incorrect');
            }
        });
    }
    $scope.signout  = function() {
        tpAuth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            tpNotifier.notify('You have successfully signed out');
            $location.path('/');
        })
    }
    $scope.signup = function() {
        $location.path('/signup');
    }
});