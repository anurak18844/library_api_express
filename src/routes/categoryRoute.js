const express = require('express');
const app = express.Router();
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/auth');

app.get("/", categoryController.getCategories);

app.get("/:id", categoryController.getCategoryById);

app.post("/", categoryController.addCategory);

app.put("/:id", categoryController.editWholeCategory);

app.delete("/:id", categoryController.deleteCategory);

module.exports = app;