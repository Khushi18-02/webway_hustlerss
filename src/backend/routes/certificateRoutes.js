const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const { getAllCertificates } = require("../controllers/certificateController");

const router = express.Router();

// Both admin & student can view certificates (filtered in controller)
router.get("/", protect, getAllCertificates);

module.exports = router;
