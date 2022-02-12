const Staff = require('../models/staffModel');

exports.register = async (req,res) => {
    try {
        let staff = new Staff({
            staff_id: req.body.staff_id,
            name: req.body.name,
            address: req.body.address,
            tel: req.body.tel,
        })
        staff.password = await staff.hashPassword(req.body.password);
        let createdStaff = await staff.save();
        res.status(200).json({
            msg: "New user created",
            data: createdStaff
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        })
    }
}

exports.getStaff = async (req,res)=>{
    Staff.find()   // db.product.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "OK",
            data: data
        });
    });
};

exports.getStaffById = async (req,res)=>{
    Staff.findById(req.params.id)   // db.product.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "OK",
            data: data
        });
    });
};

exports.editWholeStaff = async (req,res)=>{
    // req.params.id = id ของ product 
    // req.body = ข้อมูล product ที่จะ update
    let staff = {
        staff_id: req.body.staff_id,
        name: req.body.name,
        address: req.body.address,
        tel: req.body.tel,
    };
    Staff.findByIdAndUpdate(req.params.id,staff)
    .exec((err,data)=>{
        // findById อีกรอบเพื่อเอา data ใหม่
        Staff.findById(req.params.id)
        .exec((err,data)=>{
            res.status(200).json({
                msg: "OK",
                data: data
            });
        });
    });
};

exports.deleteStaff = async (req,res)=>{
    Staff.findByIdAndDelete(req.params.id)
    .exec((err,data)=>{
        res.status(200).json({
            msg: "DELETE STAFF"
        });
    });
};

