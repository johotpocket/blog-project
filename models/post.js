const mongoose = require('mongoose');

//the blueprint for our blog posts.

const PostSchema = new mongoose.Schema({
  content: { required: true, type: String },
  title: { required: true, type: String },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', PostSchema);
