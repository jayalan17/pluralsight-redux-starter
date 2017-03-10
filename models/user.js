let mongoose = require('mongoose');

let NewUserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String
});

module.exports = mongoose.model('newUser', NewUserSchema);
