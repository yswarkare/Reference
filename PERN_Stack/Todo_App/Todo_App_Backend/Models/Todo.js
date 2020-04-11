const db = require("../database");
const Sequelize = require("sequelize");

let Todo = db.define("todo", {
    title: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    time: {
        type: Sequelize.TIME
    },
    status: {
        type: Sequelize.STRING
    }
})

db.sync().then(res =>{
    console.log("todo db has been created", res);
})

module.exports = Todo;