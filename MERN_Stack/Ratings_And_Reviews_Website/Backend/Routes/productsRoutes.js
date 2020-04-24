const express = require("express");
const router = express.Router();
const Products = require("../Models/Products"); 
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth");

// Admin Protected Routes

router.get("/", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        await Products.find().populate("ratings").populate("reviews")
        .them(products =>  res.json(products))
        .catch(err => console.log(err));
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.post("/", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        const newProduct = new Products({
            productName : req.body.productName,
            brandName: req.body.brandName,
            productDescription : req.productDescription,
            category: req.body.category,
            subCategory : req.body.subCategory,
            subSubCategory : req.body.subSubCategory
        }).populate("category").populate("subCategory").populate("subSubCategory");
        await newProduct.save().then(product => res.json(product)).catch(err => console.log(err))
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.put("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        await Products.findOneAndUpdate({_id: req.params.id}, {
            productName : req.body.productName,
            brandName: req.body.brandName,
            productDescription : req.productDescription,
            category: req.body.category,
            subCategory : req.body.subCategory,
            subSubCategory : req.body.subSubCategory
        }).populate("category").populate("subCategory").populate("subSubCategory")
        .then(product => res.json(product)).catch(err => console.log(err))
    } else {
        res.json({message: "User is unauthorized"})
    }
})

router.delete("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body) === true){
        await Products.findOneAndRemove({_id: req.params.id})
            .then(product => res.json(product))
            .catch(err => console.log(err));
    } else {
        res.json({message: "User is unauthorized"})
    }
})

// UnProtected Routes

// router.get("/", async (req, res) => {
//     await Products.find().populate("ratings").populate("reviews")
//     .them(products =>  res.json(products))
//     .catch(err => console.log(err));
// })

// router.post("/", async (req, res) => {
//     const newProduct = new Products({
//         productName : req.body.productName,
//         brandName: req.body.brandName,
//         productDescription : req.productDescription,
//         category: req.body.category,
//         subCategory : req.body.subCategory,
//         subSubCategory : req.body.subSubCategory
//     }).populate("category").populate("subCategory").populate("subSubCategory");
//     await newProduct.save().then(product => res.json(product)).catch(err => console.log(err))
// })

// router.put("/:id", async (req, res) => {
//     await Products.findOneAndUpdate({_id: req.params.id}, {
//         productName : req.body.productName,
//         brandName: req.body.brandName,
//         productDescription : req.productDescription,
//         category: req.body.category,
//         subCategory : req.body.subCategory,
//         subSubCategory : req.body.subSubCategory
//     }).populate("category").populate("subCategory").populate("subSubCategory").then(product => res.json(product)).catch(err => console.log(err))
// })

// router.delete("/:id", async (req, res) => {
//     await Products.findOneAndRemove({_id: req.params.id})
//         .then(product => res.json(product))
//         .catch(err => console.log(err));
// })

module.exports = router;