const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const walletRoutes = require('./routes/walletRoutes');  // Make sure this is the correct path

// Load environment variables from .env file
dotenv.config();

// Initialize the app after importing express
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes after app is initialized
app.use('/api/wallet', walletRoutes);

// Connect to MongoDB (only once, no need to repeat)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((error) => console.error('❌ MongoDB Connection Error:', error));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
