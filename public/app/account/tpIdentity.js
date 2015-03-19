angular.module('app').factory('tpIdentity', function() {
    return {
        currentUser: undefined,
        isAuthenticated: function() {
            return !!this.currentUser;
        }
    }
})