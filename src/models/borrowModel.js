const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrowSchema = new Schema({
    borrower: {
        student_id: String,
        name: String
    },
    book: {
        book_id: String,
        name: String,
    },
    borrowDate: { type: Date, default: Date.now },
    dueDate: Date,
    lender: {
        staff_id: String,
        name: String
    },
    receiver:{
        staff_id: String,
        name: String
    },
    returnedDate: Date
}, { timestamps: true });

// export Product Schema to be usable in other components
module.exports = mongoose.model("Borrow", borrowSchema);