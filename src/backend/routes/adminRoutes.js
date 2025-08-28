const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { permit } = require("../middleware/roleMiddleware");
const { uploadCertificate, updateLeaderboard, sendNotification, addAnalytics } = require("../controllers/adminController");

const router = express.Router();

router.post("/certificates", protect, permit("admin"), uploadCertificate);
router.post("/leaderboard", protect, permit("admin"), updateLeaderboard);
router.post("/notifications", protect, permit("admin"), sendNotification);
router.post("/analytics", protect, permit("admin"), addAnalytics);

module.exports = router;
