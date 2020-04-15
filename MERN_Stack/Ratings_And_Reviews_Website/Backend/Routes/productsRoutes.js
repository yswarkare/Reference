const express = require("express");
const router = express.Router();

const Products = require("../Models/Products"); 

router.get("/", (req, res) => {
    Products.find()
    .them(products =>  res.json(products))
    .catch(err => console.log(err));
})

router.post("/", (req, res) => {
    const newProduct = new Products({
        productName : req.body.productName,
        brandName: req.body.brandName,
        productDescription : req.productDescription,
    });
    newProduct.save().then(product => res.json(product)).catch(err => console.log(err))
})

router.put("/:id", (req, res) => {
    Products.findOneAndUpdate({_id: req.params.id}, {
        productName : req.body.productName,
        brandName: req.body.brandName,
        productDescription : req.productDescription,
    }).then(product => res.json(product)).catch(err => console.log(err))
})

router.delete("/:id", (req, res) => {
    Products.findOneAndRemove({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => console.log(err));
})

module.exports = router;