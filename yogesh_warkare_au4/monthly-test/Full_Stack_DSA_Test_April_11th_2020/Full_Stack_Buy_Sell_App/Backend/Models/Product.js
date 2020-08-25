const db = require("../database");
const Sequelize = require("sequelize");

let Product = db.define("product", {
    productName: {
        type: Sequelize.STRING
    },
    sellingPrice: {
        type: Sequelize.INTEGER
    },
    negotiable: {
        type: Sequelize.STRING
    },
    productCategory: {
        type: Sequelize.STRING
    },
    sellerName: {
        type: Sequelize.STRING
    },
    sellerContactNumber: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    }
})

db.sync().then(res =>{
    console.log("product db has been created", res);
})

module.exports = Product;