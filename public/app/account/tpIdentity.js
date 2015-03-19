angular.module('app').factory('tpIdentity', function($window, tpUser) {
    var currentUser;
    if(!!$window.bootstrappedUserObject) {
        currentUser = new tpUser();
        angular.extend(currentUser, $window.bootstrappedUserObject);
    }
    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isAuthorized: function(role) {
            return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
})