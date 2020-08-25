var express = require("express");
var mongoClient = require("mongodb").MongoClient;
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser')
var db;

mongoClient.connect("mongodb://localhost:27017", function(err, client) {
    if (err)
        throw err;
    db = client.db("attainu");
})

var app = express();

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static("public"));

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.get("/students", function(req, res) {
    db.collection("students").find().toArray(function(err, result) {
        if (err)
            throw err;
        res.render("students", {
            data: result,
            title: "Students",
            students: "active"
        });
    });
});

app.get("/instructors", function(req, res) {
    db.collection("instructors").find().toArray(function(err, result) {
        if (err)
            throw err;
        res.render("instructors", {
            data: result,
            title: "Instructors",
            instructors: "active"
        });
    });
});

app.get("/students/add", function(req, res) {
    res.render("addStudent", {
        title: "Add Student",
        addNavLink: "active",
        script: "/add.js"
    });
});

app.put("/students/add", function(req, res) {
    db.collection("students").updateOne({ _id: require("mongodb").ObjectID(req.body.id) }, { $set: { name: req.body.name } }, function(error, result) {
        if (error)
            throw error;
        res.json(result);
        console.log(req.body.id + req.body.name + "updated");
    });
});

/*
app.post("/students/student", function(req, res) {
    db.collection("students").insertOne(req.body, function(err, result) {
        if (err)
            throw err;
        console.log(req.body);
    });
});*/

app.delete("/students/student", function(req, res) {
    db.collection('students').deleteOne({
        _id: require('mongodb').ObjectID(req.body.id)
    }, function(error, result) {
        if (error) throw error;
        console.log(result)
    })
});

app.listen(4080, function() {
    console.log("listening on port 4080");
});