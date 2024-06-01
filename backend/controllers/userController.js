const User = require('../models/users.js');
const mongoose = require('mongoose');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a specific user
const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ mssg: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Post a new user
const createUser = async (req, res) => {
  const { name, email, hash_password } = req.body;
  if (typeof name !== 'string' || typeof email !== 'string' || typeof hash_password !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }

  // Add doc to db
  try {
    const user = await User.create({ name, email, hash_password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete user
const deleteUser = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid user ID format' });
  }
  const task = await User.findByIdAndDelete({_id: id})

  if (!user){
    return res.status(404).json({ error: "User not found"})
  }
  
  res.status(200).json(user)
}

// Update task
const updateUser = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid user ID format' });
  }

  const user = await User.findByIdAndUpdate({ _id: id }, { ...req.body })
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
}


// Export all functions
module.exports = {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser
}