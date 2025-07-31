const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

module.exports = {
  getUsers,
  createUser
};
