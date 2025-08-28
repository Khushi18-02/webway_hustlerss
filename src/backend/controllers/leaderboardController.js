const Leaderboard = require("../models/Leaderboard");

// Admin update handled in adminController
const getLeaderboard = async (req, res) => {
  const leaderboard = await Leaderboard.find().populate("user", "username");
  res.json(leaderboard);
};

module.exports = { getLeaderboard };
