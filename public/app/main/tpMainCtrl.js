angular.module('app').controller('tpMainCtrl', function($scope, tpServices) {

    $scope.users = tpServices.userQuery('');
    console.log('$scope.users', $scope.users);
});

