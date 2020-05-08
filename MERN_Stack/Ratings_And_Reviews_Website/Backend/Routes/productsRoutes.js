const express = require("express");
const router = express.Router();
const Products = require("../Models/Products"); 
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth");

// Admin Protected Routes

router.get("/", async (req, res) => {
    try {
        let products = await Products.find()
        return res.json({products, message: "Got list of all products", success: true})
    } catch {
        return res.json({message: "Failed to get list of all products", success: false})
    }
})

router.post("/", userAuth, async (req, res) => {
    try {
        console.log(req.body);
        const newProduct = new Products({
            productName : req.body.product.productName,
            brandName: req.body.product.brandName,
            productDescription : req.body.product.productDescription,
            category: req.body.product.category,
            subCategory : req.body.product.subCategory,
            subSubCategory : req.body.product.subSubCategory,
            image : req.body.product.image,
            images: req.body.product.images
        }).populate("categories").populate("subcategories").populate("subsubcategories");
        let product = await newProduct.save()
        return res.json({message: "Product added successfully", success: true, product})
    } catch {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.put("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.user) === true){
        await Products.findOneAndUpdate({_id: req.params.id}, {
            productName : req.body.product.productName,
            brandName: req.body.product.brandName,
            productDescription : req.body.product.productDescription,
            category: req.body.product.category,
            subCategory : req.body.product.subCategory,
            subSubCategory : req.body.product.subSubCategory,
            image : req.body.product.image,
            images: req.body.product.images
        }).populate("category").populate("subCategory").populate("subSubCategory")
        .then(product => res.json(product)).catch(err => console.log(err))
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.delete("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.user) === true){
        await Products.findOneAndRemove({_id: req.params.id})
            .then(product => res.json(product))
            .catch(err => console.log(err));
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.patch("/add-image", userAuth, async (req, res) => {
    try {        
        let product1 = await Products.findOne({_id: req.bdoy.product._id})
        product1.images.push[req.body.product.image]
        let product2 = await Products.findOneAndUpdate({_id: req.bdoy.product._id}, {images: product1.images})
        return res.json({message: "Product Images Added Succcessfully", success: true, product2})
    } catch (err){
        return res.json({message: "User Is Not Authorized", success: false, error: err})
    }
})

router.patch("/update-product", userAuth, async (req, res) => {
    console.log(req.body);
    try {
        let product = await Products.findOneAndUpdate({_id: req.body.product._id}, {
            productName: req.body.product.productName,
            brandName: req.body.product.brandName,
            image: req.body.product.image,
            productDescription: req.body.product.productDescription,
            category: req.body.product.category,
            subCategory: req.body.product.subCategory,
            subSubCategory: req.body.product.subSubCategory,
        })
        let updated = await Products.findOne({_id: req.body.product._id})
        return res.json({message: "Product updated successfull", success: true, product, updated});
    } catch {
        return res.json({message: "Unable to update product", success: false})
    }
})

router.patch("/delete-product", userAuth, async (req, res) => {
    console.log(req.body);
    try {
        let product = await Products.findOneAndDelete({_id: req.body.product._id})
        return res.json({message: "Product deleted successfully", success: true, product})
    } catch {
        return res.json({message: "Unable to delete product", success: false});
    }
})

module.exports = router;