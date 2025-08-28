const Certificate = require("../models/Certificates");

// Admin creates handled in adminController
const getAllCertificates = async (req, res) => {
  const certs = await Certificate.find().populate("user event");
  res.json(certs);
};

module.exports = { getAllCertificates };
