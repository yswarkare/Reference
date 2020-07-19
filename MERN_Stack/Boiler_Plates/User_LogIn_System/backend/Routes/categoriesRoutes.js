const express = require("express");
const router = express.Router();
const Categories = require("../Models/Categories"); 
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth")

// Admin Protected Routes

router.get("/", async (req, res) => {
    try {
        let categories = await Categories.find().populate("subCategories").populate("subSubCategories")
        return res.json({message: "All Categories", success: true, categories})
    } catch (err) {
        return res.json({message: "Failed to get categories list", success: false, err});
    }
})

router.post("/", userAuth, async (req, res) => {
    try {
        const newCategory = new Categories({
            categoryName : req.body.category.categoryName
        });
        let category = await newCategory.save()
        return res.json({message: "Category added successfully", success: true, category})
    } catch {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.patch("/update-category-name", userAuth, async (req, res) => {
        console.log(req.body);
    try {
        await Categories.findOneAndUpdate({_id: req.body._id}, {categoryName: req.body.categoryName});
        let updated = await Categories.findOne({_id: req.body._id})
        return res.json({message: "Category name updated successfully", success: true, updated })
    } catch {
        return res.json({message: "Unable to update category name", success: false})
    }
})

router.patch("/delete-category", userAuth, async (req, res) => {
    console.log(req.body);
    try {
        try {            
            let subCArr = await SubCategories.find({category: req.body._id})
            for (let i = 0; i <= subCArr.length; i++) {
                await SubCategories.findOneAndDelete({_id: subCArr[i]._id})
            }
        } catch (error) {
            console.log(error);
        }
        try {            
            let sSCArr = await SubSubCategories.find({category: req.body._id})
            for (let i = 0; i <= sSCArr.length; i++) {
                await SubSubCategories.findOneAndDelete({_id: sSCArr[i]._id})
            }
        } catch (error) {
            console.log(error);
        }
        let deleted = await Categories.findOneAndDelete({_id: req.body._id})
        return res.json({message: "Category deleted successfully", success: true, deleted})

    } catch {
        return res.json({message:"Unable to delete category", success: false})
    }
})

module.exports = router;