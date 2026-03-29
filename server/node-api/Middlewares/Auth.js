const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  // for cookie based authentication
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    // for pizza
    req.pizza = pizza;
    next();
  } catch (err) {
    console.log("JWT Error:", err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = protect;