const express = require ("express");
const UserController = require("../controllers/UserController");
const app = express.Router();

app.post("/login", UserController.login);
app.post("/logout", UserController.logout);

module.exports = app;