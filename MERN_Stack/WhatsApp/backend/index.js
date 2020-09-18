const express = require("express");
const mongoose = require("mongoose");
const { success, error, info } = require("consola");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const User = require("./Models/User");
const passport = require("passport");
const { strategy } = require("./Middlewares/Passport")
const app = express();
const http = require('http');

const server = http.createServer(app, (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'}, {'token': ""})
})

const io = require("socket.io")(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.broadcast.emit('hi');
});

app.use(passport.initialize());

passport.use(
    strategy
);


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


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

const userRoutes = require("./Routes/UserRoutes");

app.use("/api/users", userRoutes);

const messageRoutes = require("./Routes/MessageRoutes");

app.use("/api/messages", messageRoutes);

const conversationRoutes = require("./Routes/ConversationRoutes");

app.use("/api/conversations", conversationRoutes);


const startServer = async () => {
    try {
        await connectMongoDB()
        server.listen(port, ()=> {
            info({message: "App Started", badge: true})
            success({message: `Server Running at Port ${port}`, badge: true})
        })
        return console.timeEnd("MongoDB Connection Time")
    } catch (err) {
        return error({message: `failed to start server\n${err}`, badge: true})
    }
}

startServer()