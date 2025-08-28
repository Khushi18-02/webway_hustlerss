const Analytics = require("../models/Analytics");

// Admin create handled in adminController
const getAnalytics = async (req, res) => {
  const data = await Analytics.find();
  res.json(data);
};

module.exports = { getAnalytics };
