const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Pizza = require("../models/Pizza");

const protect = async (req, res, next) => {
  // let token;

  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // ) {
  //   token = req.headers.authorization.split(" ")[1];
  // }

  // if (!token) {
  //   return res.status(401).json({ message: "Not authorized" });
  // }

  // for cookie based authentication
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    // for pizza routes
    const pizza = await Pizza.findById(decoded.id).select("-createdAt, -updatedAt");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user;
    // for pizza
    req.pizza = pizza;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = protect;