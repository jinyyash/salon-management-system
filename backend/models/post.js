const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String },
  content: { type: String}
});

module.exports = mongoose.model('Post', postSchema);