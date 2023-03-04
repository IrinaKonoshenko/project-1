const Users = require("../models/users");
const userValidateSchema = require("../models/users.validation");

const getUsers = async (req, res) => {
  const users = await Users.find({});
  return res.json({ items: users });
};

const createUser = async (req, res) => {
  const errors = userValidateSchema.validate(req.body);
  if (errors.error && errors.error.details.length > 0) {
    return res.status(400).json({ errors: errors.error.details });
  }

  const user = await Users.create(req.body);

  return res.json({ user });
};

const getUserById = async (req, res) => {
  const user = await Users.findById(req.params.userId);
  if (!user) {
    return res.status(400).json({ message: "Not found" });
  }
  return res.json({ user });
};

const removeUser = async (req, res) => {
  const user = await Users.findByIdAndDelete(req.params.userId);
  if (!user) {
    return res.status(400).json({ message: "Not found" });
  }
  return res.json({ user });
};

const updateUser = async (req, res) => {
  const errors = userValidateSchema.validate(req.body);
  if (errors.error && errors.error.details.length > 0) {
    return res.status(400).json({ errors: errors.error.details });
  }
  const user = await Users.findByIdAndUpdate(req.params.userId);
  if (!user) {
    return res.status(400).json({ message: "Not found" });
  }
  return res.json({ user });
};

const pathUser = async (req, res) => {
  const user = await Users.findByIdAndUpdate(req.params.userId);
  if (!user) {
    return res.status(400).json({ message: "Not found" });
  }
  return res.json({ user });
};

module.exports = {
  getUsers,
  createUser,
  getUserById,
  removeUser,
  updateUser,
  pathUser,
};
