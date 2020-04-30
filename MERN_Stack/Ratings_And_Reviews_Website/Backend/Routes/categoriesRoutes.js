const express = require("express");
const router = express.Router();
const Categories = require("../Models/Categories"); 
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth")

// Admin Protected Routes

router.get("/", async (req, res) => {
    try {
        let categories = await Categories.find()
        return res.json({categories})
    } catch (err) {
        return res.json({err});
    }
})

router.post("/", userAuth, async (req, res) => {
    if ( await validateAdmin(req.body.user) === true){
        const newCategory = new Categories({
            categoryName : req.body.category.categoryName
        });
        await newCategory.save().then(category => res.json(category)).catch(err => console.log(err))
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.put("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body.user) === true){
        await Categories.findOneAndUpdate({_id: req.params.id}, {
            categoryName : req.body.category.categoryName
        }).then(category => res.json(category)).catch(err => console.log(err))
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.delete("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body.user) === true){
        await Categories.findOneAndRemove({_id: req.params.id})
        .then(category => res.json(category))
        .catch(err => console.log(err));
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.patch("/update-category-name", userAuth, async (req, res) => {
    try {
        let update = await Categories.findOneAndUpdate({_id: req.body._id}, {categoryName: req.body.categoryName});
        return res.json({message: "Category name updated successfully", success: true, update })
    } catch {
        return res.json({message: "Unable to update category name", success: false})
    }
})

router.delete("/delete-category", userAuth, async (req, res) => {
    try {
        let deleted = await Categories.findOneAndDelete({_id: req.body._id})
        return res.json({message: "Category deleted successfully", success: true, deleted})
    } catch {
        return res.json({message:"Unable to delete category", success: false})
    }
})

module.exports = router;