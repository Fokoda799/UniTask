// Task model.

// Requirements.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task schema.
const taskSchema = new Schema({
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    minlength: [3, 'Description must be at least 3 characters long']
  },
  completed: {
    type: Boolean,
    required: [true, 'Completed status is required'],
    default: false
  },
  begin_at: {
    type: Date,
    required: false
  },
  end_at: {
    type: Date,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);