angular.module('app').controller('tpProfileCtrl', function($scope, tpAuth, tpIdentity, tpNotifier) {
    $scope.email = tpIdentity.currentUser.username;
    $scope.fname = tpIdentity.currentUser.firstName;
    $scope.lname = tpIdentity.currentUser.lastName;

    $scope.update = function() {
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        }
        if($scope.password && $scope.password.length > 0) {
            newUserData.password = $scope.password;
        }

        tpAuth.updateCurrentUser(newUserData).then(function() {
            tpNotifier.notify('Your user account has been updated');
        }, function(reason) {
            tpNotifier.error(reason);
        })
    }

})