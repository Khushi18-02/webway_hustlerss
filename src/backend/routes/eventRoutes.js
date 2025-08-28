const express = require("express");
const {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const { protect } = require("../middleware/authMiddleware");
const { permit } = require("../middleware/roleMiddleware");

const router = express.Router();

// Students + Admins
router.get("/", protect, getEvents);
router.get("/:id", protect, getEventById);

// Admin only
router.post("/", protect, permit("admin"), createEvent);
router.put("/:id", protect, permit("admin"), updateEvent);
router.delete("/:id", protect, permit("admin"), deleteEvent);

module.exports = router;
