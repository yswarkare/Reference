const express = require("express");
const mongoose = require("mongoose");
const { success, error, info } = require("consola");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const User = require("./models/User");


var http = require('http');


const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// MongoDB connection

const { MongoURI, port } = require("./Config/Config")

const connectMongoDB = async () => {
    try {
        console.time("MongoDB Connection Time")
        await mongoose.connect(MongoURI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
        
        console.timeLog("MongoDB Connection Time")
        return success({message: "MongoDB Connection Started", badge: true})
    } catch (err) {
        error({message: `Failed To Connect MongoDB DataBase\n\n${err}`, badge:true})
        return {error: true};
    }
}

// Routes

const userRoutes = require("./routes/user_routes");

app.use("/api/users", userRoutes);

// Start server

const startServer = async () => {
    try {
        await connectMongoDB()
        http.createServer(app, (req, res) => {
            res.writeHead(200, {'Content-Type': 'application/json'}, {'token': ""})
        }).listen(port, ()=> {
            info({message: "App Started", badge: true})
            success({message: `Server Running at Port ${port}`, badge: true})
        })
        return console.timeEnd("MongoDB Connection Time")
    } catch (err) {
        return error({message: `failed to start server\n${err}`, badge: true})
    }
}

startServer()