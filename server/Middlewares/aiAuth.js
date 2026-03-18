const jwt = require("jsonwebtoken");
const User = require("../models/User");

const aiAuth = async (req, res, next) => {

    const token = req.cookies?.token;

    if (!token) {
        req.user = null; // guest
        return next();
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        req.user = user || null;

    } catch (err) {
        req.user = null;
    }

    next();
};

module.exports = aiAuth;