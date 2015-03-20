angular.module('app').controller('tpMainCtrl', function($scope, tpServices, $location) {

    $scope.users = tpServices.userQuery('');
    $scope.currentPath = $location.path();

});

