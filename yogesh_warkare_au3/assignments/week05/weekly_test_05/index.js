var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(express.static(__dirname + '/views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var tweets = [{}];

// Create

app.post("/", function(req, res) {
    tweets.push({ username: req.body.username, tweet: req.body.tweet });
    console.log(tweets);
    res.sendFile(__dirname + '/tweets.html');
});

app.get("/getTweets", function(req, res) {
    res.json(tweets);
});

// Update

app.put("/", function(req, res) {
    for (i = 0; i < tweets.length; i++) {
        if (tweets[i].username.toLowercase() == req.query.username.toLowercase()) {
            tweets[i].tweet = req.body.tweet;
        }
    }
    console.log(tweets);
    res.send(tweets);
});

app.listen(8080, function() {
    console.log("App is running at 8080");
});