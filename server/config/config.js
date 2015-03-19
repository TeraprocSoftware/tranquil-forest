var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://172.17.0.14/teraproc',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://wongda:Letmein@dbh55.mongolab.com:27557/teraproc',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    }
}