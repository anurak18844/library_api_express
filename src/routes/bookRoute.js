const express = require('express');
const app = express.Router();
const bookController = require('../controllers/bookController')
const auth = require('../middleware/auth');

app.get("/", bookController.getBooks);

app.get("/:id",bookController.getBookById);

app.get("/id/:id",bookController.getBookByBookId);

app.post("/", auth,bookController.addBook);

app.put("/:id", auth,bookController.editWholeBook);

app.delete("/:id", auth,bookController.deleteBook);

module.exports = app;