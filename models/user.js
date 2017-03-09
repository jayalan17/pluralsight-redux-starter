let mongoose = require('mongoose');

let NewUserSchema = new mongoose.Schema({
  name: String,
  password: String,
  admin: Boolean
});

module.exports = mongoose.model('newUser', NewUserSchema);
