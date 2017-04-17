var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  content: { required: true, type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, defualt: Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
