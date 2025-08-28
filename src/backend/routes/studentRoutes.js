const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { permit } = require("../middleware/roleMiddleware");
const {
  getCertificates,
  getLeaderboard,
  getNotifications,
  getAnalytics,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/certificates", protect, permit("student"), getCertificates);
router.get("/leaderboard", protect, permit("student"), getLeaderboard);
router.get("/notifications", protect, permit("student"), getNotifications);
router.get("/analytics", protect, permit("student"), getAnalytics);

module.exports = router;
