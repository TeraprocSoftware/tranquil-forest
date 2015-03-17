var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
   return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
   {
      src: __dirname + '/public',
      compile: compile
   }
));
app.use(express.static(__dirname + '/public'));

if (env == 'development') {
   mongoose.connect('mongodb://172.17.0.14/teraproc');
} else {
   mongoose.connect('mongodb://wongda:Letmein@ds051990.mongolab.com:51990/teraproc');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error ...'));
db.once('open', function callback() {
   console.log('teraproc db opened');
});

app.get('/partials/:partialPath', function(req, res) {
   res.render('partials/' + req.params.partialPath);
})

app.get('*', function(req, res) {
   res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);

console.log('Listening on port ' + port + '... ctrl-c to quit');

