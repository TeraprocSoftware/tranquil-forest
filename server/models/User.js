var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');


var userSchema = mongoose.Schema({
    firstName: {type: String, required: '{PATH} is required!'},
    lastName: {type: String, required: '{PATH} is required!'},
    username: {
        type: String,
        required: '{PATH} is required!',
        unique: true
    },
    salt: {type: String, required: '{PATH} is required!'},
    hashed_pwd: {type: String, required: '{PATH} is required!'},
    roles: [String]
});
userSchema.methods = {
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function(role) {
        return this.roles.indexOf(role) > -1;
    }
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            console.log('--- collection length = 0, creating default users');
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Feng');
            User.create({firstName: 'Feng', lastName: 'Li', username: 'fengli', salt: salt, hashed_pwd: hash, roles: []});

            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Meng');
            User.create({firstName: 'Meng', lastName: 'Ding', username: 'mding', salt: salt, hashed_pwd: hash});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Weina');
            User.create({firstName: 'Weina', lastName: 'Ma', username: 'weina', salt: salt, hashed_pwd: hash});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Daniel');
            User.create({
                firstName: 'Daniel',
                lastName: 'Wong',
                username: 'wongda',
                salt: salt,
                hashed_pwd: hash,
                roles: ['admin']
            });
        }
    })
};

exports.createDefaultUsers = createDefaultUsers;
