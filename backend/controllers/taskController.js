const Task = require('../models/tasks.js');
const mongoose = require('mongoose');

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a specific task
const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ mssg: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Post a new task
const createTask = async (req, res) => {
  const { description, completed } = req.body;
  try {
    const task = new Task({
      description,
      completed: completed || false,
      createdAt: new Date(),
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a task
const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ mssg: 'Task not found' });
    }
    res.status(200).json({ mssg: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { description, completed } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, { description, completed }, { new: true, runValidators: true });
    if (!task) {
      return res.status(404).json({ mssg: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};