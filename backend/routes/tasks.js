const express = require('express');
const { check, validationResult } = require('express-validator');
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
} = require('../controllers/taskController.js');

// Create router
const router = express.Router();

// Middleware for parsing JSON bodies if not already applied globally
router.use(express.json());

// Middleware to validate ID parameter
const validateId = [
  check('id').isMongoId().withMessage('Invalid task ID format'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Middleware to validate task data
const validateTask = [
  check('title').notEmpty().withMessage('Title is required'),
  check('description').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Get all tasks
router.get('/', getAllTasks);

// Get a specific task
router.get('/:id', validateId, getTask);

// Post a new task
router.post('/', validateTask, createTask);

// Delete task
router.delete('/:id', validateId, deleteTask);

// Update task
router.patch('/:id', validateId, validateTask, updateTask);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Export router
module.exports = router;
