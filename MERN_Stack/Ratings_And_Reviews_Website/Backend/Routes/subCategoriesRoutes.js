const express = require("express");
const router = express.Router();

const SubCategories = require("../Models/SubCategories"); 

router.get("/", (req, res) => {
    SubCategories.find()
    .them(subCategories =>  res.json(subCategories))
    .catch(err => console.log(err));
})

router.post("/", (req, res) => {
    const newSubCategory = new SubCategories({
        subCategoryName : req.body.subCategoryName
    });
    newSubCategory.save().then(subCategory => res.json(subCategory)).catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
    SubCategories.findOneAndUpdate({_id: req.params.id}, {
        subCategoryName : req.body.subCategoryName
    }).then(subCategory => res.json(subCategory)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    SubCategories.findOneAndRemove({_id: req.params.id})
        .then(subCategory => res.json(subCategory))
        .catch(err => console.log(err));
})

module.exports = router;