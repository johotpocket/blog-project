var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  content: String,
  title: String
});

module.exports = mongoose.model('Post', PostSchema);
