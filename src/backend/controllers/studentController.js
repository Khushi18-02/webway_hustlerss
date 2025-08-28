// Students can view their profile, certificates, leaderboard, notifications, analytics
const Certificate = require("../models/Certificates");
const Leaderboard = require("../models/Leaderboard");
const Notification = require("../models/Notification");
const Analytics = require("../models/Analytics");

const getCertificates = async (req, res) => {
  const certs = await Certificate.find({ user: req.user.id }).populate("event");
  res.json(certs);
};

const getLeaderboard = async (req, res) => {
  const leaderboard = await Leaderboard.find().populate("user", "username");
  res.json(leaderboard);
};

const getNotifications = async (req, res) => {
  const notes = await Notification.find({ user: req.user.id });
  res.json(notes);
};

const getAnalytics = async (req, res) => {
  const data = await Analytics.find();
  res.json(data);
};

module.exports = { getCertificates, getLeaderboard, getNotifications, getAnalytics };
