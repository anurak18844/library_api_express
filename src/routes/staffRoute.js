const express = require('express');
const app = express.Router();
const staffController = require('../controllers/staffController')
const auth = require('../middleware/auth');

app.get("/", staffController.getStaff);

app.get("/:id",staffController.getStaffById);

app.post("/register", auth,staffController.register);

app.post("/login", staffController.login);

app.patch("/:id", auth,staffController.editWholeStaff);

app.delete("/:id", auth,staffController.deleteStaff);

module.exports = app;