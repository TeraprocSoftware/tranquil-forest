describe('tpUser', function() {
    beforeEach(module('app'));

    describe('isAdmin', function() {
        it('should return false if the role array does not have an admin entry', inject(function(tpUser) {
            var user = new tpUser();
            user.roles = ['not admin'];
            expect(user.isAdmin()).to.be.falsey;
        }));

        it('should return true if the roles array has an admin entry', inject(function(tpUser) {
            var user = new tpUser();
            user.roles = ['admin'];
            expect(user.isAdmin()).to.be.true;
        }))
    })
})