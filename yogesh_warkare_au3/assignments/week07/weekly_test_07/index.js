var express = require("express");
var session = require("express-session");
var mongoClient = require('mongodb').MongoClient;

var db;

mongoClient.connect("mongodb://localhost:27017", function(error, client) {
    if (error)
        throw error;
    db = client.db("myLib");
});

var app = express();

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
        res.sendfile("./addStudent.html");
    } else {
        res.redirect("/");
    }
});

app.post("/addStudent", function(req, res) {
    db.collection("Students").insertOne(req.body);
    console.log("inserted " + req.body.firstname + " " + req.body.lastname + " info");
    res.redirect("/user");
});

app.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/");
});

app.delete("/deleteStudent", function(req, res) {
    db.collection('students').deleteOne({
        _id: require('mongodb').ObjectID(req.body.id)
    }, function(error, result) {
        if (error) throw error;
        res.json(result);
    })
});

app.put("/updateStudent", function(req, res) {
    db.collection('students').updateOne({ _id: require('mongodb').ObjectID(req.query.id) }, {
        $set: {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            hometown: req.body.hometown,
            username: req.body.usernqme,
            password: req.body.password
        }
    }, function(error, result) {
        if (error) throw error;
        res.json(result);
    });
});


app.listen(3000, function() {
    console.log("Listening on 3040");
});