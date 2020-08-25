var express = require("express");
var mongoClient = require('mongodb').MongoClient;
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var db;

mongoClient.connect("mongodb://localhost:27017", function(error, client) {
    if (error)
        throw error;
    db = client.db("userData");
});

var app = express();

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home", {
        title: "Home",
        home: "active"
    });
});

// add a movie info

app.post("/addMovie", function(req, res) {
    db.collection("movies").insertOne(req.body);
    res.redirect("/");
});

// list of movies

app.get("/listMovies", function(req, res) {
    res.render("listMovies", {
        title: "List of Movies",
        listMovies: "active"
    });
});

app.post("/listMovies", function(req, res) {
    db.collection("movies").find().toArray(function(error, result) {
        if (error) throw error;
        var data;
        data = result;
        res.redirect("/listMovies");
    });
});

// movie info

app.get("/movie", function(req, res) {
    db.collection("movies").find().toArray(function(err, result) {
        if (err)
            throw err;
        res.render("movie", {
            data: result,
            title: "movie",
            movie: "active"
        });
    });
});

app.post("/movie", function(req, res) {
    db.collection("movies").find().toArray(function(error, result) {
        if (error) throw error;
        var data;
        data = result;
        res.redirect("/movie");
    });
});

// edit a movie info

app.get("/editMovie", function(req, res) {
    db.collection("movies").find().toArray(function(err, result) {
        if (err)
            throw err;
        res.render("editMovie", {
            data: result,
            title: "Edit Movie",
            editMovie: "active"
        });
    });
});

app.put("/editMovie", function(req, res) {
    db.collection("movies").updateOne({ _id: require('mongodb').ObjectID(req.body.id) }, {
            $set: {
                name: req.body.name,
                hero: req.body.hero,
                heroine: req.body.heroine,
                budget: req.body.budget,
                favorite: req.body.favorite,
            }
        },
        function(error, result) {
            if (error)
                throw error;
            result = result;
            res.redirect("/movie");
            console.log("inserted " + req.body.name + " " + " info")
        });

});

// delete a movie

app.post("/delete", function(req, res) {
    db.collection("movies").find().toArray(function(err, result) {
        if (err)
            throw err;
        console.log(result);
    });
    res.redirect("/");
    console.log("movie" + req.body.name + "is deleted");
});

app.delete("/delete", function(req, res) {
    db.collection("movies").deleteOne({ _id: require('mongodb').ObjectID(req.body.id) }, function(error, result) {
        if (error)
            throw error;
        console.log(result);
    });
    res.redirect("/");
    console.log("movie" + req.body.name + "is deleted");
});

// delete all movies

app.post("/deleteAll", function(req, res) {
    db.collection("movies").find().toArray(function(err, result) {
        if (err)
            throw err;
        data = result;
    });
    res.redirect("/");
});

app.delete("/deleteAll", function(req, res) {
    db.collection("movies").deleteMany({}, function(error, result) {
        if (error)
            throw error;
        console.log(result);
    });
    res.redirect("/");
    console.log("all data is deleted");
});

// port

app.listen(3040, function() {
    console.log("Listening on 3040");
});