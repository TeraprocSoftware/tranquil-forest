angular.module('app').factory('tpServices', function ($http) {
    var identityHostAdmin = 'http://teraproc-identityadmin.ngrok.com';
    var identityPortAdmin = "80";
    var identityVersion = '/v2.0';

    return {
        userQuery: function (userId) {

            var tpURI = identityHostAdmin + ":" + identityPortAdmin + identityVersion + '/users' + userId;
            var userList = [];

            console.log("tpURI", tpURI);
//            $http.get(tpURI).success(function (data) {
//                for (var i = 0; i < data.length; i++) {
//                    userList[i] = data[i];
//                }
//            });

            userList = {
                "users": [
                    {
                        "email": "feng.li@example.com",
                        "id": "c6c1a8661f7f447b81e74dc6bacd4653",
                        "enabled": true,
                        "lastname": "Li",
                        "firstname": "Feng",
                        "name": "fengli",
                        "username": "fengli"
                    },
                    {
                        "email": "dingmeng@gmail.com",
                        "id": "eae09507980b46e7ac70da62b27ec337",
                        "enabled": true,
                        "lastname": "Ding",
                        "firstname": "Meng",
                        "name": "mding",
                        "username": "mding"
                    },
                    {
                        "email": "weina.ma@example.com",
                        "id": "dae6ab5f71664c1c9ac51efed69298fc",
                        "enabled": true,
                        "lastname": "Ma",
                        "firstname": "Weina",
                        "name": "weina",
                        "username": "weina"
                    },
                    {
                        "email": "wongda@teraproc.com",
                        "id": "91140eb6a92f4f238b05d1ca50d214d6",
                        "enabled": true,
                        "lastname": "Wong",
                        "firstname": "Daniel",
                        "name": "wongda",
                        "username": "wongda"
                    }
                ]
            }
            return userList["users"];
        }
    }
})
