// config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use MONGO_URI instead of MONGODB_URI to match your .env file
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
    
    if (!mongoUri) {
      console.error("❌ MONGO_URI is not defined in environment variables");
      console.log("📝 Please check your .env file has:");
      console.log("MONGO_URI=mongodb://127.0.0.1:27017/edutech");
      throw new Error("Database URI not configured");
    }

    console.log("🔗 Attempting to connect to MongoDB...");
    console.log("📍 URI:", mongoUri.replace(/\/\/([^:]+):([^@]+)@/, '//*****:*****@')); // Hide credentials in logs
    
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    
    // Provide helpful error messages
    if (error.message.includes('ECONNREFUSED')) {
      console.log("💡 Make sure MongoDB is running:");
      console.log("   - Install MongoDB locally, or");
      console.log("   - Start local MongoDB service");
      console.log("   - On Windows: Start 'MongoDB' service");
      console.log("   - On Mac/Linux: run 'mongod'");
    }
    
    // Don't exit the process in development, just throw the error
    throw error;
  }
};

module.exports = connectDB;