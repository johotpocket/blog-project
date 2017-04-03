var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var routes  = require ('./controllers/api/routes');
var passport     = require('passport');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var uriUtil      = require('mongodb-uri');
var path         = require('path');

var mongoose = require('mongoose');

var options = {
server:  { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
var mongodbUri = process.env.MONGODB_URI || "mongodb://localhost/ms-blogging-site";
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

mongoose.connect(mongooseUri, options);

app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Express only serves static assets in production
const isProd = process.env.NODE_ENV === 'production';
const clientPath = isProd ? 'client/build' : 'client/public';

if (isProd) {
  app.use(express.static(clientPath));
}

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
require('./controllers/api/userAuth.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.set('port', process.env.PORT || 3001);

routes(app);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, clientPath, 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
