const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = { generateAccessToken, generateRefreshToken };
