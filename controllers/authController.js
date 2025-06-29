const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");
const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const existing = await User.findUserByEmail(email);
  if (existing) return res.status(400).json({ msg: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  await User.createUser({ name, email, password: hashed });
  const token = jwt.generateToken({ email });

  res.status(201).json({ token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findUserByEmail(email);
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.generateToken({ email });
  res.json({ token });
};
