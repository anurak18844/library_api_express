const Category = require('../models/categoryModel');

exports.getCategories = async (req, res)=>{
    Category.find()
    .exec((err,data)=>{
        res.status(200).json({
            msg: "GET CATEGORIES",
            data: data
        });
    });
}


exports.getCategoryById = async (req, res)=>{
    Category.findById(req.params.id)
    .exec((err,data)=>{
        res.status(200).json({
            msg: "GET CATEGORY BY ID",
            data: data
        });
    });
}

exports.addCategory = async (req, res)=>{
    try {
        let category = new Category({
            category_id: req.body.category_id,
            name: req.body.name,
            day_can_borrow: req.body.day_can_borrow
        });

        let createdCategory = await category.save();
        res.status(200).json({
            msg: "INSERT CATEGORY",
            data: createdCategory
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error
        });
    }
}

exports.editWholeCategory = async (req, res)=>{
    let category = {
        category_id: req.body.category_id,
        name: req.body.name,
        day_can_borrow: req.body.day_can_borrow
    };
    Category.findByIdAndUpdate(req.params.id,category)
    .exec((err,data)=>{
        Category.findById(req.params.id)
        .exec((err,data)=>{
            res.status(200).json({
                msg: "UPDATE CATEGORY",
                data: data
            });
        });
    });
}

exports.deleteCategory = async (req, res)=>{
    Category.findByIdAndDelete(req.params.id)
    .exec((err,data)=>{
        res.status(200).json({
            msg: `CATEGORY ID : ${req.params.id} IS DELETED`
        });
    });
}

exports.getCategoryByCategoryId = async (req, res)=>{
    Category.findOne({category_id: req.params.id})
    .exec((err,data)=>{
        res.status(200).json({
            msg: "GET CATEGORY BY NAME",
            data: data
        });
    });
}
