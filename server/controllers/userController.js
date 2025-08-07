const Note = require('../models/noteModel');
const asyncHandler = require('express-async-handler');

const createNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const note = await Note.create({
        user: req.user.id,
        title,
        content
    });

    res.status(201).json(note);
});
const createRoom = async (req, res) => {
    try {
        const { roomNumber, price, description, image, category, countInStock } = req.body;

        const room = new Room({
            roomNumber,
            price,
            description,
            image,
            category,
            countInStock
        });

        const createdRoom = await room.save();
        res.status(201).json(createdRoom);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    console.log("Body received:", req.body);

};


const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
});

const updateNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;

    const updated = await note.save();
    res.json(updated);
});




const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'Not authorized' });
    }

    await note.remove();
    res.json({ message: 'Note deleted' });
});

module.exports = {
    createNote,
    getNotes,
    updateNote,
    deleteNote
};
