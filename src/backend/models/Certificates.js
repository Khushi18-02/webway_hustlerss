const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  issuedBy: { type: String, required: true },
  dateIssued: { type: Date, default: Date.now },
  fileUrl: { type: String }, // uploaded file link
});

module.exports = mongoose.model("Certificates", certificateSchema);
