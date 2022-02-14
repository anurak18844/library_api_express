const express = require('express');
const app = express.Router();
const borrowController = require("../controllers/borrowController");
const auth = require('../middleware/auth');

app.post("/", auth,borrowController.borrowBook);

app.patch("/:id", auth,borrowController.returnBook);

app.get("/:id", borrowController.getBorrowDataByMember);

app.get("/id/:id", borrowController.getBorrowDataById);

app.delete("/:id", auth,borrowController.deleteBorrow);

app.get("/", borrowController.getBorrows);
module.exports = app;