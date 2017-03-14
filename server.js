var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var postsRouter = require ('./routes/posts');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/ms-blogging-site");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3001);

app.use('/api/posts', postsRouter);

app.listen(app.get('port'), function(){
  console.log("node server running on port ", app.get('port'))
});
