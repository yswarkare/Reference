const express = require("express");
const router = express.Router();

const SubSubCategories = require("../Models/SubSubCategories"); 

router.get("/", (req, res) => {
    SubSubCategories.find()
    .them(subSubCategories =>  res.json(subSubCategories))
    .catch(err => console.log(err));
})

router.post("/", (req, res) => {
    const newSubSubCategory = new SubSubCategories({
        subSubCategoryName : req.body.subSubCategoryName
    });
    newSubSubCategory.save().then(subSubCategory => res.json(subSubCategory)).catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
    SubSubCategories.findOneAndUpdate({_id: req.params.id}, {
        subSubCategoryName : req.body.subSubCategoryName
    }).then(subSubCategory => res.json(subSubCategory)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    SubSubCategories.findOneAndRemove({_id: req.params.id})
        .then(subSubCategory => res.json(subSubCategory))
        .catch(err => console.log(err));
})

module.exports = router;