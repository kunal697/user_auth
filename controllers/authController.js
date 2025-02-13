const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

const registerUser = async (req, res) => {
  const { username, email, password, fullName, gender, dob, country } = req.body;

  if (!username || !email || !password || !fullName || !gender || !dob || !country) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existingUser = await User.findOne({ $or: [{ username }, { email }] });

  if (existingUser) {
    return res.status(400).json({ message: "Username or Email already exists" });
  }

  const user = new User({ username, email, password, fullName, gender, dob, country });

  await user.save();

  res.status(201).json({
    message: "User registered successfully",
    token: generateToken(user),
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.status(200).json({
    message: "Login successful",
    token: generateToken(user),
  });
};

module.exports = { registerUser, loginUser };
