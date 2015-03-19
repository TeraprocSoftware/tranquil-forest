angular.module('app').controller('tpUserListCtrl', function($scope, tpUser) {
    $scope.users = tpUser.query();
});