
var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');


var userSchema = mongoose.Schema({
    firstName: {type:String, required:'{PATH} is required!'},
    lastName: {type:String, required: '{PATH} is required!'},
    userName: {
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
    }
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Feng');
            User.create({
                firstName: 'Feng',
                lastName: 'Li',
                userName: 'fengli',
                salt: salt,
                hashed_pwd: hash,
                roles: []
            });
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Meng');
            User.create({firstName: 'Meng', lastName: 'Ding', userName: 'mding', salt: salt, hashed_pwd: hash});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Weina');
            User.create({firstName: 'Weina', lastName: 'Ma', userName: 'weina', salt: salt, hashed_pwd: hash});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'Daniel');
            User.create({
                firstName: 'Daniel',
                lastName: 'Wong',
                userName: 'wongda',
                salt: salt,
                hashed_pwd: hash,
                roles: ['admin']
            });
        }
    })
};

exports.createDefaultUsers = createDefaultUsers;
