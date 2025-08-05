const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    number: { type: String, required: true },
    type: { type: String, enum: ["single", "double", "suite"], required: true },
    price: { type: Number, required: true },
    status: { type: String, enum: ["available", "booked"], default: "available" },
});

module.exports = mongoose.model("Room", roomSchema);
