const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Middleware to check whether the provided access token is valid
 */
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({ message: "No token provided" });
  }

  // Check if the token is in the format 'Bearer <token>'
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;
  if (!token) return res.status(401).json({ message: "Token Required" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token" });

    req.userId = user.id;
    next();
  });
};

module.exports = { authenticateToken };
