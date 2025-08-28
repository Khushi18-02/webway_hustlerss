const mongoose = require("mongoose");

const analyticsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  action: { type: String, required: true }, // e.g., "event_register", "login"
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Analytics", analyticsSchema);
