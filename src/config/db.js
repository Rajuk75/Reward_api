const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://ambikaambika1210_db_user:ZLLntawVCWuS9ofT@gplbackend.jwcppn6.mongodb.net/?retryWrites=true&w=majority&appName=gplbackend");
    console.log('MongoDB connected');
  } catch (err) {
    console.error('DB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
