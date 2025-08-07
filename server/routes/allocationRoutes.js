const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// ✅ Allocate Room to User
router.post('/allocate', authMiddleware, async (req, res) => {
    const { roomId, userId } = req.body;

    try {
        const room = await Room.findById(roomId);
        if (!room) return res.status(404).json({ error: 'Room not found' });

        if (room.isBooked) return res.status(400).json({ error: 'Room already booked' });

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ error: 'User not found' });

        room.isBooked = true;
        room.assignedTo = user._id;
        await room.save();

        res.json({ message: 'Room successfully allocated', room });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ❌ Deallocate Room
router.post('/deallocate/:roomId', authMiddleware, async (req, res) => {
    const { roomId } = req.params;

    try {
        const room = await Room.findById(roomId);
        if (!room) return res.status(404).json({ error: 'Room not found' });

        room.isBooked = false;
        room.assignedTo = null;
        await room.save();

        res.json({ message: 'Room successfully deallocated', room });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
