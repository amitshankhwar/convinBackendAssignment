const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const jwt = require("jsonwebtoken");

/**
 * Register a user
 */
const register = async (req, res) => {
  const { firstName, lastName, email, password, phone } = req.body;

  try {
    const isUser = await User.findOne({ email });
    if (isUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
    });
    await user.save();
    res.status(201).json({ message: "User Registration Successful" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Login a user
 */
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid Credentials" });

    const accessToken = generateAccessToken(user._id.toString());
    const refreshToken = generateRefreshToken(user._id.toString());
    res
      .status(200)
      .json({ message: "Login Successful", accessToken, refreshToken });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * Refresh Token
 */
const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken)
    return res.status(400).json({ message: "Refresh Token Required" });

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Refresh Token" });
    const accessToken = generateAccessToken(user.id);
    res.status(200).json({ accessToken });
  });
};

module.exports = { register, login, refreshToken };
