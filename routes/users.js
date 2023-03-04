const express = require("express");
const {
  getUsers,
  createUser,
  getUserById,
  removeUser,
  updateUser,
  pathUser,
} = require("../controllers/users");
const router = express.Router();

router.get("/", getUsers);

router.get("/:userId", getUserById);

router.post("/", createUser);

router.put("/:userId", updateUser);

router.delete("/:userId", removeUser);

router.patch("/userId", pathUser);

module.exports = router;
