const express = require("express");
const router = express.Router();
const SubSubCategories = require("../Models/SubSubCategories"); 
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth");

// Admin Protected Routes

router.get("/", async (req, res) => {
    try {
        let subSubCategories = await SubSubCategories.find().populate("products")
        return res.json(subSubCategories)
    } catch (err) {
        return res.json({message: "User is Unauthorized", success: false, error: err})
    }
})

router.post("/", userAuth , async (req, res) => {
    try {
        const newSubSubCategory = new SubSubCategories({
            subSubCategoryName : req.body.subSubCategory.subSubCategoryName
        });
        let subSubCategory = await newSubSubCategory.save()
        return res.json({subSubCategory, message: "Sub-Category Added Successfully", success: true})
    } catch {
        return res.json({message: "Failed To Add Sub-Sub-Category", success: false})
    }
})

router.put("/:id", userAuth , async (req, res) => {
    if (validateAdmin(req.user) === true){
        await SubSubCategories.findOneAndUpdate({_id: req.params.id}, {
            subSubCategoryName : req.body.subSubCategory.subSubCategoryName
        }).then(subSubCategory => res.json(subSubCategory)).catch(err => console.log(err))
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.delete("/:id", userAuth , async (req, res) => {
    if (validateAdmin(req.user) === true){
        await SubSubCategories.findOneAndRemove({_id: req.params.id})
            .then(subSubCategory => res.json(subSubCategory))
            .catch(err => console.log(err));
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.patch("/update-sub-sub-category-name", userAuth, async (req, res) => {
    try {
        let subSubCategory = await SubSubCategories.findOneAndUpdate({_id: req.body._id}, {subSubCategoryName: req.body.subSubCategoryName});
        let updated = await SubSubCategories.findOne({_id: req.body._id})
        return res.json({message: "Category name updated successfully", success: true,subSubCategory, updated })
    } catch {
        return res.json({message: "Unable to update category name", success: false})
    }
})

router.patch("/delete-sub-sub-category", userAuth, async (req, res) => {
    try {
        let deleted = await SubSubCategories.findOneAndDelete({_id: req.body._id})
        return res.json({message: "Sub-Sub-Category deleted successfully", success: true, deleted})
    } catch {
        return res.json({message: "Unabe to delete sub-sub-category", success: false})
    }
})


module.exports = router;

// UnProtected Routes

// router.get("/", (req, res) => {
//     SubSubCategories.find().populate("products")
//     .them(subSubCategories =>  res.json(subSubCategories))
//     .catch(err => console.log(err));
// })

// router.post("/", (req, res) => {
//     const newSubSubCategory = new SubSubCategories({
//         subSubCategoryName : req.body.subSubCategory.subSubCategoryName
//     });
//     newSubSubCategory.save().then(subSubCategory => res.json(subSubCategory)).catch(err => console.log(err))
// })


// router.put("/:id", (req, res) => {
//     SubSubCategories.findOneAndUpdate({_id: req.params.id}, {
//         subSubCategoryName : req.body.subSubCategory.subSubCategoryName
//     }).then(subSubCategory => res.json(subSubCategory)).catch(err => console.log(err))
// })

// router.delete("/:id", (req, res) => {
//     SubSubCategories.findOneAndRemove({_id: req.params.id})
//         .then(subSubCategory => res.json(subSubCategory))
//         .catch(err => console.log(err));
// })
