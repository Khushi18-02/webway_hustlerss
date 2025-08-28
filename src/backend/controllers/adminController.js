// Admin-only actions: manage users, gamification points, certificates, analytics, notifications
const Certificate = require("../models/Certificates");
const Leaderboard = require("../models/Leaderboard");
const Notification = require("../models/Notification");
const Analytics = require("../models/Analytics");

// Upload certificate for a student
const uploadCertificate = async (req, res) => {
  try {
    const cert = await Certificate.create({
      user: req.body.user,
      event: req.body.event,
      fileUrl: req.body.fileUrl,
    });
    res.json(cert);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Update leaderboard points
const updateLeaderboard = async (req, res) => {
  const { userId, points } = req.body;
  let entry = await Leaderboard.findOne({ user: userId });
  if (!entry) {
    entry = await Leaderboard.create({ user: userId, points });
  } else {
    entry.points = points;
    await entry.save();
  }
  res.json(entry);
};

// Send notification
const sendNotification = async (req, res) => {
  const { userId, message } = req.body;
  const note = await Notification.create({ user: userId, message });
  res.json(note);
};

// Add analytics record
const addAnalytics = async (req, res) => {
  try {
    const record = await Analytics.create(req.body);
    res.json(record);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = { uploadCertificate, updateLeaderboard, sendNotification, addAnalytics };
