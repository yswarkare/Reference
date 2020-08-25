const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./Config/config")
const cors = require("cors");
const { success, error } = require("consola");
const passport = require("passport");
const { strategy } = require("./middlewares/passport");
const path = require("path");


const app = express()

app.use(express.json());

app.use(cors());
app.use(passport.initialize());

passport.use(
    strategy
);

const uri = mongoURI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
.then(()=>success({message: `MongoDB Database Connection Established Successfully with database \n${uri}`, badge: true}))
.catch((err)=>error({message: `MongoDB Database Connection Failed \n${err}`, badge: true}));

// Routers

// Users Router

const usersRouter = require("./Routes/usersRoutes");

app.use("/api/users", usersRouter);

// Posts Routes

const blogPostsRouter = require("./Routes/blogPostsRoutes");

app.use("/api/blog-posts", blogPostsRouter);

// Posts Routes

const commentsRouter = require("./Routes/commentsRoutes");

app.use("/api/posts", commentsRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("ratings-and-reviews/build"));
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "ratings-and-reviews", "build", "index.html"));
    })
}

module.exports = app;