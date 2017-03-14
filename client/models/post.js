var mongoose = require('mongoose');

var PostSchema = new Mongoose.Schema({
  content: String,
  title: String
});

module.exports = mongoose.model('Post', PostSchema);
