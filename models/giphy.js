let mongoose = require('mongoose');

let GiphySchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String
});

module.exports = mongoose.model('Giphy', GiphySchema);
