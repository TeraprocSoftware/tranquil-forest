angular.module('tpServices', [])
.factory('tpAPI', ['$http', function($http) {
        var identityHostAdmin = 'http://teraproc-identityadmin.ngrok.com';
        var identityPortAdmin = "80";
        var identityVersion = '/v2.0';

        return {
            userQuery: function (userId) {

                var tpURI = identityHostAdmin + ":" + identityPortAdmin + identityVersion + '/users' + userId;
                var userList = [];

                console.log("tpURI", tpURI)
                $http.get(tpURI).success(function (data) {
                    for (var i = 0; i < data.length; i++) {
                        userList[i] = data[i];
                    }
                })
            }
        }
    }]);
