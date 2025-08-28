const Notification = require("../models/Notification");

// Admin create handled in adminController
const getNotifications = async (req, res) => {
  const notes = await Notification.find({ user: req.user.id });
  res.json(notes);
};

module.exports = { getNotifications };
