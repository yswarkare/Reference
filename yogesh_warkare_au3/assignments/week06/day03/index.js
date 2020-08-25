var express = require("express");
var session = require("express-session");

var app = express();

app.use(
    session({
        secret: "express session secret"
    })
);

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

var students = [{
        username: "stewiegriffin",
        email: "stewiegriffin@gmail.com",
        password: "stewie",
    },

    {
        username: "glennquagmire",
        email: "glenquagmire@gmail.com",
        password: "glenn",
    },

    {
        username: "joeswanson",
        email: "joeswanson@gmail.com",
        password: "joe",
    }
];

app.post("/login", function(req, res) {
    for (var i = 0; i < students.length; i++) {
        if (req.body.email == students[i].email && req.body.password == students[i].password) {
            req.session.loggedIn = true;
            req.session.username = students[i].username;
        }
    }
    res.redirect("/user");
});

app.get("/user", function(req, res) {
    if (req.session.loggedIn = true) {
        //        res.send("Welcome" + req.session.username + " " + `<a href="/logout">Logout</a>`);
        res.sendfile("/webmail.html");
    } else {
        res.redirect("/");
    }
});

app.get("/logout", function(req, res) {
    req.session.destroy();
    res.redirect("/");
});

app.listen(3000, function() {
    console.log("Listening on 3000");
});