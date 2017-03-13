let mongoose = require('mongoose');

let NewUserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  }
});

module.exports = mongoose.model('newUser', NewUserSchema);
