const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { roomNumber, type } = req.body;
    const newRoom = new Room({ roomNumber, type });
    await newRoom.save();
    res.status(201).json(newRoom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📋 Get All Rooms
router.get('/', authMiddleware, async (req, res) => {
  try {
    const rooms = await Room.find().populate('assignedTo', 'name email');
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✏️ Update Room
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRoom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Delete Room
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: 'Room deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
