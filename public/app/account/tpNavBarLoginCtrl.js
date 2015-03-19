angular.module('app').controller('tpNavBarLoginCtrl', function($scope, $http, tpIdentity, tpNotifier, tpAuth) {
    $scope.identity = tpIdentity;
    $scope.signin = function(username, password) {
        tpAuth.authenticateUser(username, password).then(function(success) {
            if(success) {
                tpNotifier.notify('You have successfully signed in!');
            } else {
                tpNotifier.notify('Username or Password is incorrect');
            }
        });
    }
    $scope.signup = function() {
        console.log("I'm not done sign-up either")
    }
})