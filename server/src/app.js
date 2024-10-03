const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { connectDB } = require('./config/database');
const { errorHandler } = require('./middlewares/errorHandler');

// Import service routes
// const splitwiseRoutes = require('./services/splitwise/routes');
// const photoUploadRoutes = require('./services/photoUpload/routes');
// const taskTrackingRoutes = require('./services/taskTracking/routes');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Connect to MongoDB
// connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
  
// app.use('/api/splitwise', splitwiseRoutes);
// app.use('/api/photo-upload', photoUploadRoutes);
// app.use('/api/task-tracking', taskTrackingRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;