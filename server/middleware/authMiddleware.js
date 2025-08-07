const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;


    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {

            token = req.headers.authorization.split(' ')[1];

            console.log("Authorization Header:", req.headers.authorization);

            const decoded = jwt.verify(token, process.env.JWT_SECRET);


            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};
// middleware/isAdmin.js
module.exports = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
};


module.exports = protect;
