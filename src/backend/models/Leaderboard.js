const mongoose = require("mongoose");

const leaderboardSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  points: { type: Number, default: 0 },
});

module.exports = mongoose.model("Leaderboard", leaderboardSchema);
