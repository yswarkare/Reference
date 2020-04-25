const express = require("express");
const router = express.Router();
const SubSubCategories = require("../Models/SubSubCategories"); 
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth");

// Admin Protected Routes

router.get("/", userAuth , async (req, res) => {
    if (validateAdmin(req.body) === true){
        await SubSubCategories.find().populate("products")
        .them(subSubCategories =>  res.json(subSubCategories))
        .catch(err => console.log(err));
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.post("/", userAuth , async (req, res) => {
    if (validateAdmin(req.body) === true){
        const newSubSubCategory = new SubSubCategories({
            subSubCategoryName : req.body.subSubCategoryName
        });
        await newSubSubCategory.save().then(subSubCategory => res.json(subSubCategory)).catch(err => console.log(err))
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.put("/:id", userAuth , async (req, res) => {
    if (validateAdmin(req.body) === true){
        await SubSubCategories.findOneAndUpdate({_id: req.params.id}, {
            subSubCategoryName : req.body.subSubCategoryName
        }).then(subSubCategory => res.json(subSubCategory)).catch(err => console.log(err))
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.delete("/:id", userAuth , async (req, res) => {
    if (validateAdmin(req.body) === true){
        await SubSubCategories.findOneAndRemove({_id: req.params.id})
            .then(subSubCategory => res.json(subSubCategory))
            .catch(err => console.log(err));
    } else {
        res.json({message: "User is unauthorized"})
    }
})

// UnProtected Routes

// router.get("/", (req, res) => {
//     SubSubCategories.find().populate("products")
//     .them(subSubCategories =>  res.json(subSubCategories))
//     .catch(err => console.log(err));
// })

// router.post("/", (req, res) => {
//     const newSubSubCategory = new SubSubCategories({
//         subSubCategoryName : req.body.subSubCategoryName
//     });
//     newSubSubCategory.save().then(subSubCategory => res.json(subSubCategory)).catch(err => console.log(err))
// })

// router.put("/:id", (req, res) => {
//     SubSubCategories.findOneAndUpdate({_id: req.params.id}, {
//         subSubCategoryName : req.body.subSubCategoryName
//     }).then(subSubCategory => res.json(subSubCategory)).catch(err => console.log(err))
// })

// router.delete("/:id", (req, res) => {
//     SubSubCategories.findOneAndRemove({_id: req.params.id})
//         .then(subSubCategory => res.json(subSubCategory))
//         .catch(err => console.log(err));
// })

module.exports = router;