var express = require("express");
var session = require("express-session");
var mongoClient = require('mongodb').MongoClient;
var exphbs = require("express-handlebars");

var db;

mongoClient.connect("mongodb://localhost:27017", function(error, client) {
    if (error)
        throw error;
    db = client.db("myLib");
});

var app = express();

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(
    session({
        secret: "express session secret"
    })
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.post("/login", function(req, res) {
    db.collection("Users").find().toArray(function(error, result) {
        if (error) throw error;
        for (var i = 0; i < result.length; i++) {
            if (req.body.username == result[i].username && req.body.password == result[i].password) {
                req.session.loggedIn = true;
            }
        }
        res.redirect("/user");
    })
});

app.get("/user", function(req, res) {
    if (req.session.loggedIn = true) {
        res.render("students");
    } else {
        res.redirect("/");
    }
});

//app.post("/addStudent", function(req,res){
//    db.collection("Students").insertOne(req.body);
//    console.log("inserted " + req.body.firstname + " " + req.body.lastname + " info");
//    res.redirect("/user");
//});

app.get("/getStudent", function(req, res) {
    db.collection("Students").find({ hometown: req.query.hometown }).toArray(function(error, result) {
        if (error) throw error;
        res.json(result);

    })
})

app.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Listening on 3000");
});