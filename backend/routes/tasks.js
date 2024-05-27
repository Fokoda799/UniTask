// This is the tasks router.

// Import nessesary modules.
import express from 'express';

// Create router.
const router = express.Router();

// Get all tasks.
router.get('/', (req, res) => {
  res.json({mssg: "Get all tasks"});
});

// Get a spesific task.
router.get('/:id', (req, res) => {
  res.json({mssg: "Get a spesific task"});
});

// Post a new task.
router.post('/:id', (req, res) => {
  res.json({mssg: "Post a new task"});
});

// Delete task.
router.delete('/:id', (req, res) => {
  res.json({mssg: "Delete a new task"});
});

// Update task.
router.patch( '/:id', (req, res) => {
  res.json({mssg: "Update a task"});
})

// Export router.
export default router;
