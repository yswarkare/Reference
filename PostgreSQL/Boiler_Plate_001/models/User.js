const db = require("../database");
const { Sequelize, DataTypes } = require("sequelize");

let User = db.define("user", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    firstName: {
        type: DataTypes.STRING
    },
    middleName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    emailId: {
        type: DataTypes.STRING
    }
},{
    timestamps: true
})

db.sync({ alter: true }).then(res =>{
    console.log("user db has been created", res);
})

module.exports = User;