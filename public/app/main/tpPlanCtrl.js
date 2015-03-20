angular.module('app').controller('tpPlanCtrl', function($scope, $location) {

    $scope.selectPlan = function(plan) {
        console.log('plan selected: ', plan);
        $location.path('/launch');
    };
    $scope.flavors = [
        {
            "instanceGroups": [
                {
                    "parameters": {
                        "volumeType": "Gp2",
                        "instanceType": "T2Micro"
                    },
                    "nodeCount": 2,
                    "groupName": "slave"
                },
                {
                    "parameters": {
                        "volumeType": "Gp2",
                        "instanceType": "T2Micro"
                    },
                    "volumeSize": 6,
                    "volumeCount": 1,
                    "nodeCount": 1,
                    "groupName": "master"
                }
            ],
            "cloudPlatform": "AWS",
            "name": "micro"
        },
        {
            "instanceGroups": [
                {
                    "parameters": {
                        "instanceType": "M3Medium"
                    },
                    "nodeCount": 4,
                    "groupName": "slave"
                },
                {
                    "parameters": {
                        "volumeType": "Ephemeral",
                        "instanceType": "M3Xlarge"
                    },
                    "volumeSize": 40,
                    "volumeCount": 1,
                    "nodeCount": 1,
                    "groupName": "master"
                }
            ],
            "cloudPlatform": "AWS",
            "name": "small"
        },
        {
            "instanceGroups": [
                {
                    "parameters": {
                        "instanceType": "G22xlarge"
                    },
                    "nodeCount": 1,
                    "groupName": "slave"
                },
                {
                    "parameters": {
                        "volumeType": "Ephemeral",
                        "instanceType": "G22xlarge"
                    },
                    "volumeSize": 60,
                    "volumeCount": 1,
                    "nodeCount": 1,
                    "groupName": "master"
                }
            ],
            "cloudPlatform": "AWS",
            "name": "gpu"
        }
    ];



});

