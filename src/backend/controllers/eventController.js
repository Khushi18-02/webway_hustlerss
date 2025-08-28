const Event = require("../models/Event");

// @desc    Create a new event (Admin only)
const createEvent = async (req, res) => {
  try {
    const { title, description, date, venue } = req.body;

    const event = new Event({
      title,
      description,
      date,
      venue,
      createdBy: req.user.id, // admin who created
    });

    await event.save();
    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error: error.message });
  }
};

// @desc    Get all events (Students + Admins)
const getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 }); // upcoming first
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error: error.message });
  }
};

// @desc    Get single event details
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error: error.message });
  }
};

// @desc    Update event (Admin only)
const updateEvent = async (req, res) => {
  try {
    const { title, description, date, venue } = req.body;

    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date || event.date;
    event.venue = venue || event.venue;

    await event.save();
    res.json({ message: "Event updated successfully", event });
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error: error.message });
  }
};

// @desc    Delete event (Admin only)
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error: error.message });
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
