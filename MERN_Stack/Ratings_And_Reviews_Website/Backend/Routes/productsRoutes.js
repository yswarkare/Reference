const express = require("express");
const router = express.Router();
const Products = require("../Models/Products"); 
const { validateAdmin } = require("../Utils/Validations");
const { userAuth } = require("../Utils/Auth");

// Admin Protected Routes

router.get("/", async (req, res) => {
    if (validateAdmin(req.body.user) === true){
        await Products.find().populate("ratings").populate("reviews")
        .them(products =>  res.json(products))
        .catch(err => console.log(err));
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.post("/", userAuth, async (req, res) => {
    if (validateAdmin(req.body.user) === true){
        const newProduct = new Products({
            productName : req.body.product.productName,
            brandName: req.body.product.brandName,
            productDescription : req.body.product.productDescription,
            category: req.body.product.category,
            subCategory : req.body.product.subCategory,
            subSubCategory : req.body.product.subSubCategory,
            images: req.body.product.images
        }).populate("category").populate("subCategory").populate("subSubCategory");
        await newProduct.save().then(product => res.json(product)).catch(err => console.log(err))
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.put("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body.user) === true){
        await Products.findOneAndUpdate({_id: req.params.id}, {
            productName : req.body.product.productName,
            brandName: req.body.product.brandName,
            productDescription : req.body.product.productDescription,
            category: req.body.product.category,
            subCategory : req.body.product.subCategory,
            subSubCategory : req.body.product.subSubCategory,
            images: req.body.product.images
        }).populate("category").populate("subCategory").populate("subSubCategory")
        .then(product => res.json(product)).catch(err => console.log(err))
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.delete("/:id", userAuth, async (req, res) => {
    if (validateAdmin(req.body.user) === true){
        await Products.findOneAndRemove({_id: req.params.id})
            .then(product => res.json(product))
            .catch(err => console.log(err));
    } else {
        return res.json({message: "User is Unauthorized", success: false})
    }
})

router.patch("/add-image", userAuth, async (req, res) => {
    try {
        if (validateAdmin(req.body.user) === true){
            let product1 = await Products.findOne({_id: req.bdoy.product._id})
            product1.images.push[req.body.product.image]
            let product2 = await Products.findOneAndUpdate({_id: req.bdoy.product._id}, {images: product1.images})
            return res.json({message: "Product Images Added Succcessfully", success: true, product2})
        }
    } catch (err){
        return res.json({message: "User Is Not Authorized", success: false, error: err})
    }
})

router.patch("/update-product", userAuth, async (req, res) => {
    try {
        let product = Products.findOneAndUpdate({_id: req.body.product._id}, {
            productName: req.body.product.productName,
            brandName: req.body.product.brandName,
            image: req.body.product.image,
            productDescription: req.body.product.productDescription,
            category: req.body.product.category,
            subCategory: req.body.product.subCategory,
            subSubCategory: req.body.product.subSubCategory,
        })
        return res.json({message: "Product updated successfull", success: true, product});
    } catch {
        return res.json({message: "Unable to update product", success: false})
    }
})

router.delete("/delete-product", userAuth, async (req, res) => {
    try {
        let product = await Products.findOneAndDelete({_id: req.body._id})
        return res.json({message: "Product deleted successfully", success: true, product})
    } catch {
        return res.json({message: "Unable to delete product", success: false});
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
//         productName : req.body.product.productName,
//         brandName: req.body.product.brandName,
//         productDescription : req.body.product.productDescription,
//         category: req.body.product.category,
//         subCategory : req.body.product.subCategory,
//         subSubCategory : req.body.product.subSubCategory
//     }).populate("category").populate("subCategory").populate("subSubCategory");
//     await newProduct.save().then(product => res.json(product)).catch(err => console.log(err))
// })

// router.put("/:id", async (req, res) => {
//     await Products.findOneAndUpdate({_id: req.params.id}, {
//         productName : req.body.product.productName,
//         brandName: req.body.product.brandName,
//         productDescription : req.body.product.productDescription,
//         category: req.body.product.category,
//         subCategory : req.body.product.subCategory,
//         subSubCategory : req.body.product.subSubCategory
//     }).populate("category").populate("subCategory").populate("subSubCategory").then(product => res.json(product)).catch(err => console.log(err))
// })

// router.delete("/:id", async (req, res) => {
//     await Products.findOneAndRemove({_id: req.params.id})
//         .then(product => res.json(product))
//         .catch(err => console.log(err));
// })

module.exports = router;