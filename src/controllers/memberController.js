const Member = require('../models/memberModel');
const Category = require('../models/categoryModel')
exports.register = async (req, res)=>{
    let member =  new Member(req.body);

    member.password = await member.hashPassword(req.body.password);
    let cretedMember = await member.save();
    res.status(200).json({
        msg: "REGISTER SUCCESS",
        data: cretedMember
    });

}

exports.getMembers = async (req, res)=>{
    Member.find()   // db.product.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "SEARCH MEMBERS",
            data: data
        });
    });
};

exports.getMemberById = async (req,res)=>{
    Member.findById(req.params.id)   // db.product.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "SERARCH BY ID",
            data: data
        });
    });
};

// exports.getMemberByMemberId = async (req,res)=>{
//     console.log(req.params.id);
//     Member.findOne({student_id: req.params.id})   // db.product.find()
//     .exec((err,data)=>{
//         res.status(200).json({
//             msg: "SERARCH BY ID",
//             data: data
//         });
//     });
// };

exports.deleteMember = async (req,res)=>{
    Member.findByIdAndDelete(req.params.id)
    .exec((err,data)=>{
        res.status(200).json({
            msg: "DELETE SUCCESS"
        });
    });
};

exports.editWholeMember = async (req,res)=>{
    // req.params.id = id ของ product 
    // req.body = ข้อมูล product ที่จะ update
    let member = {        
        student_id: req.body.student_id,
        name: req.body.name,
        tel: req.body.tel,
        address: req.body.address,
        group_learning: req.body.group_learning,
        category: {
            category_id: req.body.category.category_id,
            name: req.body.category.name,
            day_can_borrow: req.body.category.day_can_borrow
        }
    };
    Member.findByIdAndUpdate(req.params.id,member)
    .exec((err,data)=>{
        // findById อีกรอบเพื่อเอา data ใหม่
        Member.findById(req.params.id)
        .exec((err,data)=>{
            res.status(200).json({
                msg: "OK",
                data: data
            });
        });
    });
};

exports.getMemberByMemberId = async (req,res)=>{
    console.log(req.params.id);
    Member.findOne({student_id: req.params.id})   // db.product.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "SERARCH BY ID",
            data: data
        });
    });
};