const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const tasksRoutes = require('./routes/tasks.js');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

// Express app.
const app = express();

// Configuration.
dotenv.config();

// Validate environment variables.
if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not defined in the environment variables');
  process.exit(1);
}

// Middleware.
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/tasks', tasksRoutes);

// Global error handler.
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Database connection.
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(4000, () => {
      console.log('Server is running on port 4000');
    });
  })
  .catch((error) => {
    console.log(error);
  });