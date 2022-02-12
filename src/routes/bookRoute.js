const express = require('express');
const app = express.Router();
const bookController = require('../controllers/bookController')
const auth = require('../middleware/auth');

app.get("/", bookController.getBooks);

app.get("/:id",bookController.getBookById);

app.post("/", bookController.addBook);

app.put("/:id", bookController.editWholeBook);

app.delete("/:id", bookController.deleteBook);

module.exports = app;