const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book_id:{
        type:String,
        required:true,
        unique: true
    },
    name: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    publisher: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
},{ timestamps: true });

module.exports = mongoose.model("Book",bookSchema);