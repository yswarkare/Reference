const db = require("../database");
const Sequelize = require("sequelize");

let City = db.define("city", {
    city: {
        type: Sequelize.STRING
    }
})

db.sync().then(res =>{
    console.log("city db has been created", res);
})

module.exports = City;