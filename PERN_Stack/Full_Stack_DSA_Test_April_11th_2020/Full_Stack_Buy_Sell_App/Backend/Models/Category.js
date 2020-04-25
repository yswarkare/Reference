const db = require("../database");
const Sequelize = require("sequelize");

let Category = db.define("category", {
    category: {
        type: Sequelize.STRING
    }
})

db.sync().then(res =>{
    console.log("category db has been created", res);
})

module.exports = Category;