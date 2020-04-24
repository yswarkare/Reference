const express = require("express");
const router = express.Router();
const SubCategories = require("../Models/SubCategories");
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth");

// Admin Protected Routes

router.get("/", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        await SubCategories.find().populate("products").populate("subSubCategories")
        .them(subCategories =>  res.json(subCategories))
        .catch(err => console.log(err));
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.post("/", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        const newSubCategory = new SubCategories({
            subCategoryName : req.body.subCategoryName
        });
        await newSubCategory.save().then(subCategory => res.json(subCategory)).catch(err => console.log(err))
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.put("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        await SubCategories.findOneAndUpdate({_id: req.params.id}, {
            subCategoryName : req.body.subCategoryName
        }).then(subCategory => res.json(subCategory)).catch(err => console.log(err))
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.delete("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        await SubCategories.findOneAndRemove({_id: req.params.id})
            .then(subCategory => res.json(subCategory))
            .catch(err => console.log(err));
    } else {
        res.json({message: "User is unauthorized"})
    }
})

// UnProtected Routes

// router.get("/", (req, res) => {
//     SubCategories.find().populate("products").populate("subSubCategories")
//     .them(subCategories =>  res.json(subCategories))
//     .catch(err => console.log(err));
// })

// router.post("/", (req, res) => {
//     const newSubCategory = new SubCategories({
//         subCategoryName : req.body.subCategoryName
//     });
//     newSubCategory.save().then(subCategory => res.json(subCategory)).catch(err => console.log(err))
// })

// router.put("/:id", (req, res) => {
//     SubCategories.findOneAndUpdate({_id: req.params.id}, {
//         subCategoryName : req.body.subCategoryName
//     }).then(subCategory => res.json(subCategory)).catch(err => console.log(err))
// })

// router.delete("/:id", (req, res) => {
//     SubCategories.findOneAndRemove({_id: req.params.id})
//         .then(subCategory => res.json(subCategory))
//         .catch(err => console.log(err));
// })

module.exports = router;