const express = require("express");
const { success, error, info } = require("consola");
const cors = require("cors")
const fs = require("fs-extra");

const app = express();

app.use(cors())


const connectToDB = () => {
    let usersFile = "./DataBase/Users.json";
    fs.ensureFileSync(usersFile)
}