const mongoose = require('mongoose');

async function connectDB(){
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    }); 
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ Mongo error: " ,error.message);
    process.exit(1);
  }
}

module.exports = { connectDB };