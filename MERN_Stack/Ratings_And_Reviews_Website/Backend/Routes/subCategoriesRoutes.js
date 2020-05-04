const express = require("express");
const router = express.Router();
const SubCategories = require("../Models/SubCategories");
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth");

// Admin Protected Routes

router.get("/", async (req, res) => {
    try {
        let subCategories = await SubCategories.find().populate("products").populate("subSubCategories")
        return res.json(subCategories)
    } catch (err) {
        return res.json({message: "User is Unauthorized", success: false, error: err})
    }
})

router.post("/", userAuth, async (req, res) => {
    try{
        console.log("after validation => "+req.user);
        const newSubCategory = new SubCategories({
            subCategoryName : req.body.subCategory.subCategoryName
        });
        let subCategory = await newSubCategory.save()
        return res.json({message: "Sub-Category added successfully", success: true, subCategory});
    } catch {
        return res.json({message: "Unable To Add Sub-Category", success: false})
    }
})

router.put("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.user) === true){
        await SubCategories.findOneAndUpdate({_id: req.params.id}, {
            subCategoryName : req.body.subCategory.subCategoryName
        }).then(subCategory => res.json(subCategory)).catch(err => console.log(err))
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.delete("/", userAuth, async (req, res) => {
    if (validateAdmin(req.user) === true){
        await SubCategories.findOneAndRemove({_id: req.body._id})
            .then(subCategory => res.json(subCategory))
            .catch(err => console.log(err));
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.patch("/update-sub-category-name", userAuth, async (req, res) => {
    console.log(req.body)
    try {
        let subCategory = await SubCategories.findOneAndUpdate({_id: req.body._id}, {subCategoryName: req.body.subCategoryName});
        let updated = await SubCategories.findOne({_id: req.body._id})
        return res.json({message: "Category name updated successfully", success: true, subCategory, updated })
    } catch {
        return res.json({message: "Unable to update category name", success: false})
    }
})

router.patch("/delete-sub-category", userAuth, async (req, res) => {
    console.log(req.body)
    try {
        let deleted = await SubCategories.findOneAndDelete({_id: req.body._id})
        return res.json({message: "Sub-Category deleted successfully", success: true, deleted})
    } catch {
        return res.json({message: "Unabe to delete sub-category", success: false})
    }
})

module.exports = router;

// UnProtected Routes

// router.get("/", (req, res) => {
//     SubCategories.find().populate("products").populate("subSubCategories")
//     .them(subCategories =>  res.json(subCategories))
//     .catch(err => console.log(err));
// })

// router.post("/", (req, res) => {
//     const newSubCategory = new SubCategories({
//         subCategoryName : req.body.subCategory.subCategoryName
//     });
//     newSubCategory.save().then(subCategory => res.json(subCategory)).catch(err => console.log(err))
// })

// router.put("/:id", (req, res) => {
//     SubCategories.findOneAndUpdate({_id: req.params.id}, {
//         subCategoryName : req.body.subCategory.subCategoryName
//     }).then(subCategory => res.json(subCategory)).catch(err => console.log(err))
// })

// router.delete("/:id", (req, res) => {
//     SubCategories.findOneAndRemove({_id: req.params.id})
//         .then(subCategory => res.json(subCategory))
//         .catch(err => console.log(err));
// })

