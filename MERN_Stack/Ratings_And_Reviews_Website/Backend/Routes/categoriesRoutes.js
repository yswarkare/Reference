const express = require("express");
const router = express.Router();
const Categories = require("../Models/Categories"); 
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth")

// Admin Protected Routes

router.get("/", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        await Categories.find().populate("products").populate("subCategories")
        .them(categories =>  res.json(categories))
        .catch(err => console.log(err));
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.post("/", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        const newCategory = new Categories({
            categoryName : req.body.categoryName
        });
        await newCategory.save().then(category => res.json(category)).catch(err => console.log(err))
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.put("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        await Categories.findOneAndUpdate({_id: req.params.id}, {
            categoryName : req.body.categoryName
        }).then(category => res.json(category)).catch(err => console.log(err))
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.delete("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        await Categories.findOneAndRemove({_id: req.params.id})
        .then(category => res.json(category))
        .catch(err => console.log(err));
    } else {
        res.json({message: "User is unauthorized"})
    }
})

module.exports = router;