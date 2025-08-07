const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const roomRoutes = require('./routes/roomRoutes'); // new
const allocationRoutes = require('./routes/allocationRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use('/api/rooms', roomRoutes);
app.use('/api/manage', allocationRoutes);
app.use('/api/dashboard', dashboardRoutes);

dotenv.config();

app.use(express.json());

// Routes

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

require('events').EventEmitter.defaultMaxListeners = 20; // or more, as needed

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("MongoDB connection error:", err));


// Routes
app.use('/api/notes', noteRoutes); // 👈 base path
app.use("/api/auth", require("./routes/authRoutes"));

app.use('/api/notes', noteRoutes);

connectDB();

app.use(express.urlencoded({ extended: true }));

app.use('/api/hotel', authRoutes);
app.use('/api/auth', authRoutes);
app.use(cors());
