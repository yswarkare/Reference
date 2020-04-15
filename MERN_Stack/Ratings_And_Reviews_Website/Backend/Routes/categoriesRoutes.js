const express = require("express");
const router = express.Router();

const Categories = require("../Models/Categories"); 

router.get("/", (req, res) => {
    Categories.find()
    .them(categories =>  res.json(categories))
    .catch(err => console.log(err));
})

router.post("/", (req, res) => {
    const newCategory = new Categories({
        categoryName : req.body.categoryName
    });
    newCategory.save().then(category => res.json(category)).catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
    Categories.findOneAndUpdate({_id: req.params.id}, {
        categoryName : req.body.categoryName
    }).then(category => res.json(category)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    Categories.findOneAndRemove({_id: req.params.id})
        .then(category => res.json(category))
        .catch(err => console.log(err));
})

module.exports = router;