const express = require('express');
const app = express.Router();
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/auth');

app.get("/", categoryController.getCategories);

app.get("/:id", categoryController.getCategoryById);

app.get("/id/:id", categoryController.getCategoryByCategoryId);

app.post("/", auth,categoryController.addCategory);

app.put("/:id", auth,categoryController.editWholeCategory);

app.delete("/:id", auth,categoryController.deleteCategory);

module.exports = app;