angular.module('app').controller('tpOverviewCtrl', function($scope, $location) {

    $scope.overview = function () {
        console.log('Overview read');
        $location.path('/credential');
    };
})