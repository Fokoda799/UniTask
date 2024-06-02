// User model.

// Requirements.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;  // Capitalize Schema for consistency with Mongoose conventions

// User schema.
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false
  },
  hash_password: {
    type: String,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);