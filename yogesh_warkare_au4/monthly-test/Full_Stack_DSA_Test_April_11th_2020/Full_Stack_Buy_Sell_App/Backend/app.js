const express = require("express");
const app = express();
const Product = require("./Models/Product");
const Category = require("./Models/Category");
const City = require("./Models/City");

// app.use(express.urlencoded({extended : true}));
app.use(express.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Product

app.post("/product", async(req, res) => {
    try{
        const { body } = req;
        let product = await Product.create({ productName: body.productName, sellingPrice: body.sellingPrice, negotiable: body.negotiable , productCategory: body.productCategory, sellerName: body.sellerName, sellerContactNumber: body.sellerContactNumber, city: body.city });
        res.send(product);
    } catch (error) {
        console.log(error);
    }
})

app.get("/product", async (req, res) => {
    try {
        let products = await Product.findAll();
        res.send(products);
    } catch (error) {
        console.log(error);
    }
})

app.put("/product/:id", async (req, res) => {
    try {
        const { body, params } = req;
        let product = await Product.update({ productName: body.productName, sellingPrice: body.sellingPrice, negotiable: body.negotiable , productCategory: body.productCategory, sellerName: body.sellerName, sellerContactNumber: body.sellerContactNumber, city: body.city }, {where: {id: params.id}});
        res.send(product);
    } catch (error) {
           console.log(error);
    }
});

app.delete("/product/:id", async (req, res) => {
    try {
        const { params } = req;
        await Product.destroy({where: {id: params.id}});
        res.send("Deleted Successfully");
    } catch (error) {
           console.log(error);
    }
});

// Categories

app.post("/category", async(req, res) => {
    try{
        const { body } = req;
        let category = await Category.create({ category: body.category });
        res.send(category);
    } catch (error) {
        console.log(error);
    }
})

app.get("/category", async (req, res) => {
    try {
        let categories = await Category.findAll();
        res.send(categories);
    } catch (error) {
        console.log(error);
    }
})

app.put("/category/:id", async (req, res) => {
    try {
        const { body, params } = req;
        let category = await Category.update({ category: body.category }, {where: {id: params.id}});
        res.send(category);
    } catch (error) {
           console.log(error);
    }
});

app.delete("/category/:id", async (req, res) => {
    try {
        const { params } = req;
        await Category.destroy({where: {id: params.id}});
        res.send("Deleted Successfully");
    } catch (error) {
           console.log(error);
    }
});

// Cities

app.post("/city", async(req, res) => {
    try{
        const { body } = req;
        let city = await City.create({ city: body.city });
        res.send(city);
    } catch (error) {
        console.log(error);
    }
})

app.get("/city", async (req, res) => {
    try {
        let cities = await City.findAll();
        res.send(cities);
    } catch (error) {
        console.log(error);
    }
})

app.put("/city/:id", async (req, res) => {
    try {
        const { body, params } = req;
        let city = await City.update({ city: body.city }, {where: {id: params.id}});
        res.send(city);
    } catch (error) {
           console.log(error);
    }
});

app.delete("/city/:id", async (req, res) => {
    try {
        const { params } = req;
        await City.destroy({where: {id: params.id}});
        res.send("Deleted Successfully");
    } catch (error) {
           console.log(error);
    }
});

module.exports = app;