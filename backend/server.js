// This is the default express server to add a new route for the API.

// Import nessesary modules.
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import tasksRoutes from './routes/tasks.js';

// Express app.
const app = express();

// Configuration.
dotenv.config();

// Middelware.
app.use(express.json());

app.use( (req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/tasks', tasksRoutes);

// Database connection.
mongoose.connect("mongodb+srv://UniTaskdb: UniTaskpassword@unitask.bpx8alw.mongodb.net/?retryWrites=true&w=majority&appName=UniTask")
  .then(() => {
    // Listening port.
    app.listen(4000, () => {
      console.log('Server is running on port ', 4000)
    });
  })
  .catch((error) => {
    console.log(error);
  });
