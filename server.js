import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import doctorsRouter from './routes/doctors.js';
import appointmentsRouter from './routes/appointments.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/appointment_booking';

// Enable Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/doctors', doctorsRouter);
app.use('/api/appointments', appointmentsRouter);

// Root route for API check
app.get('/', (req, res) => {
  res.send({ status: 'OK', message: 'Appointment Booking API is running successfully.' });
});

// Connect to MongoDB using Mongoose
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB successfully at:', MONGO_URI);
  })
  .catch((err) => {
    console.warn('MongoDB connection warning:', err.message);
    console.warn('Backend server running in resilient fallback mode.');
  });

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (http://localhost:${PORT})`);
});
