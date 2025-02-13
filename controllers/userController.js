const User = require("../models/UserModel");

const getUser = async (req, res) => {
  const { username, email } = req.query;

  if (!username && !email) {
    return res.status(400).json({ message: "Provide username or email" });
  }

  const user = await User.findOne({ $or: [{ username }, { email }] }).select("-password");

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};

module.exports = { getUser };