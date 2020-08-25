var express = require ("express");

var app = express();

app.use(express.json());

app.post("/add", function(req, res){
    var response = {
        num1 : req.body.num1,
        num2 : req.body.num2,
        result : req.body.num1 + req.body.num2
    }
    res.json(response);
});

app.post("/sub", function(req, res){
    var response = {
        num1 : req.body.num1,
        num2 : req.body.num2,
        result : req.body.num1 - req.body.num2
    }
    res.json(response);
});

app.post("/mul", function(req, res){
    var response = {
        num1 : req.body.num1,
        num2 : req.body.num2,
        result : req.body.num1 * req.body.num2
    }
    res.json(response);
});

app.post("/div", function(req, res){
    var response = {
        num1 : req.body.num1,
        num2 : req.body.num2,
        result : req.body.num1 / req.body.num2
    }
    res.json(response);
});

app.listen(3000, function(){
    console.log("listening on port 3000");
});