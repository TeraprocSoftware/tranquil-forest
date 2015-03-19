angular.module('app').controller('tpSignupCtrl', function($scope, tpUser, tpAuth, $location, tpNotifier) {

    $scope.signup = function() {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        tpAuth.createUser(newUserData).then(function() {
            tpNotifier.notify('User account created!');
            $location.path('/');
        }, function(reason) {
            tpNotifier.error(reason);
        });
    }

})