angular.module('app').controller('tpLaunchCtrl', function($scope, $location) {

    $scope.launch = function () {
        console.log('Launching Cluster ...');
        $location.path('/clustermgr');
    };
});