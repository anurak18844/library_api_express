const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category_id: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    day_can_borrow: {
        type: Number,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model("Category", categorySchema);