const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { registerUser, loginUser } = require('../controllers/authController');
const protectedRoutes = require('./protectedRoutes');
const app = express();

app.use('/api/hotel', protectedRoutes);

// ✅ Get All Users
router.get('/users', authMiddleware, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});


router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/dashboard', authMiddleware, (req, res) => {
  res.status(200).json({ message: "Welcome to dashboard" });
});
module.exports = router;
