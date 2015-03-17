angular.module('app').controller('tpMainCtrl', function($scope, tpAPI) {

    $scope.data = tpAPI.userQuery('');
    console.log('$scope.data', $scope.data);
});

