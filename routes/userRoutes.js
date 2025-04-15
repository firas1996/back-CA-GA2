const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const Router = express.Router();

Router.post("/", createUser);
Router.get("/", getAllUsers);
Router.get("/:id", getUserById);
Router.patch("/:id", updateUser);
Router.delete("/:id", deleteUser);

module.exports = Router;
