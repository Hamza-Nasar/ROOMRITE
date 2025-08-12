// Add room
app.post("/rooms", authMiddleware, adminMiddleware, async (req, res) => {
    const { roomNumber, type, price } = req.body;
    const room = new Room({ roomNumber, type, price, isBooked: false });
    await room.save();
    res.json({ message: "Room added successfully", room });
});

// Edit room
app.put("/rooms/:id", authMiddleware, adminMiddleware, async (req, res) => {
    const updated = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// Delete room
app.delete("/rooms/:id", authMiddleware, adminMiddleware, async (req, res) => {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: "Room deleted successfully" });
});
