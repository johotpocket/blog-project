const mongoose = require('mongoose');

//the blueprint for our blog posts.

const PostSchema = new mongoose.Schema({
  content: String,
  title: String
});

module.exports = mongoose.model('Post', PostSchema);
