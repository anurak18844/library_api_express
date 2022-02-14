const Borrow = require("../models/borrowModel");
const Member = require("../models/memberModel");
exports.borrowBook = async (req, res) => {
    try {
        let borrow = new Borrow(req.body);
        console.log(borrow);
        let createdBorrow = await borrow.save();


        Member.findOne({student_id: req.body.borrower.student_id})   // db.product.find()
            .exec((err, data) => {
                let findMember = data;
                // console.log(findMember.category.day_can_borrow)
                console.log(findMember);
                let dayOfBorrow = findMember.category.day_can_borrow
                console.log(createdBorrow.borrowDate);
                let dDate = new Date(createdBorrow.borrowDate)
                console.log(dDate.getDate() + dayOfBorrow);
                let dataDate = {
                    dueDate: dDate.setDate(dDate.getDate() + dayOfBorrow)
                }

                Borrow.findByIdAndUpdate(createdBorrow._id, dataDate).exec((err, result)=>{
                    Borrow.findById(createdBorrow._id)
                        .exec((err, result)=>{
                            res.status(200).json({
                                msg: "Borrow savedeeeeeeeee",
                                data: result
                            });
                        });
                });
            });


    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
}

exports.returnBook = async(req, res) => {
    let data = { 
            returnedDate : new Date(),
            receiver: {
                staff_id: req.body.staff_id,
                name: req.body.name,
            }
        }; 
        console.log(data);
    Borrow.findByIdAndUpdate(req.params.id, data).exec((err, result)=>{
            Borrow.findById(req.params.id)
                .exec((err, result)=>{
                    res.status(200).json({
                        msg: "Return book saved",
                        data: result
                    });
                });
        });
};

exports.getBorrowDataByMember = async (req, res) => {
    let member_id = req.params.id;
    console.log(member_id);
    Borrow.find({ "borrower.member_id": member_id })
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.getBorrowDataById = async (req, res) => {
    // let book_id = req.params.id;
    // console.log(book_id);
    Borrow.findById(req.params.id)
        .exec((err, result) => {
            res.status(200).json({
                msg: "OK",
                data: result
            });
        });
};

exports.deleteBorrow = async (req,res)=>{
    Borrow.findByIdAndDelete(req.params.id)
    .exec((err,data)=>{
        res.status(200).json({
            msg: "DELETE SUCCESS"
        });
    });
};

exports.getBorrows = async (req, res)=>{
    Borrow.find()   // db.product.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "SEARCH MEMBERS",
            data: data
        });
    });
};
