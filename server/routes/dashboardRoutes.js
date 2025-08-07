const express = require('express');
const router = express.Router();
const Room = require('../models/Room');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, async (req, res) => {
    try {
        const totalRooms = await Room.countDocuments();
        const bookedRooms = await Room.countDocuments({ isBooked: true });
        const availableRooms = await Room.countDocuments({ isBooked: false });
        const totalUsers = await User.countDocuments();

        res.json({
            totalRooms,
            bookedRooms,
            availableRooms,
            totalUsers
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
