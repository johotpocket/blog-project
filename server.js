var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var postsRouter  = require ('./routes/posts');
var passport     = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/ms-blogging-site");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
 secret: 'blahblahblah'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
// routes ======================================================================
require('./config/passport')(passport); // pass passport for configuration
require('./routes/userAuth.js')(app, passport); // load our routes and pass in our app and fully configured passpo

app.set('port', process.env.PORT || 3001);

app.use('/api/posts', postsRouter);

app.listen(app.get('port'), function(){
  console.log("node server running on port ", app.get('port'))
});
