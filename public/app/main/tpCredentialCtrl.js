angular.module('app').controller('tpCredentialCtrl', function($scope, $location) {

    $scope.credential = function () {
        console.log('credential entered but not validated: ', $scope.name, $scope.roleARN);
        $location.path('/plan');
    };

});