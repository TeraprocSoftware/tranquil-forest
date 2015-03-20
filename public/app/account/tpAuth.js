angular.module('app').factory('tpAuth', function ($http, tpIdentity, $q, tpUser) {
    return {
        authenticateUser: function (username, password) {
            var dfd = $q.defer();
            $http.post('/login', {username: username, password: password}).then(function (response) {
                if (response.data.success) {
                    var user = new tpUser();
                    angular.extend(user, response.data.user);
                    tpIdentity.currentUser = user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },

        createUser: function(newUserData) {
            var newUser = new tpUser(newUserData);
            var dfd = $q.defer();

            newUser.$save().then(function() {
                tpIdentity.currentUser = newUser;
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        },

        logoutUser: function () {
            var dfd = $q.defer();
            $http.post('/logout', {logout: true}).then(function () {
                tpIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise;
        },
        authorizeCurrentUserForRoute: function (role) {
            if (tpIdentity.isAuthorized(role)) {
                return true;
            } else {
                return $q.reject('not authorized');
            }
        }
    }
});