const Book = require('../models/bookModel');
exports.getBooks = async (req, res)=>{
    Book.find()   // db.product.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "OK",
            data: data
        });
    });
};

exports.getBookById = async (req,res)=>{
    Book.findById(req.params.id)   // db.product.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "OK",
            data: data
        });
    });
};

exports.addBook = async (req,res)=>{
    try {
        let book = new Book({
            book_id: req.body.book_id,
            name: req.body.name,
            author: req.body.author,
            publisher: req.body.publisher,
            price: req.body.price
        });
        // เก็บผลลัพธืจากการเพิ่มข้อมูล
        let createdBook = await book.save(); //asynchronous
        res.status(200).json({
            msg: "Add a product complete.",
            data: createdBook
        });
    } catch (err) {
        // เมื่อเกิด error จะส่ง  error message ออกไปด้วย
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
};

exports.editWholeBook = async (req,res)=>{
    // req.params.id = id ของ product 
    // req.body = ข้อมูล product ที่จะ update
    let book = {
        book_id: req.body.book_id,
        name: req.body.name,
        author: req.body.author,
        publisher: req.body.publisher,
        price: req.body.price
    };
    Book.findByIdAndUpdate(req.params.id,book)
    .exec((err,data)=>{
        // findById อีกรอบเพื่อเอา data ใหม่
        Book.findById(req.params.id)
        .exec((err,data)=>{
            res.status(200).json({
                msg: "OK",
                data: data
            });
        });
    });
};

exports.deleteBook = async (req,res)=>{
    Book.findByIdAndDelete(req.params.id)
    .exec((err,data)=>{
        res.status(200).json({
            msg: "DELETE BOOK"
        });
    });
};

exports.getBookByBookId = async (req,res)=>{
    Book.findOne({book_id: req.params.id})   // db.product.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "OK",
            data: data
        });
    });
};

