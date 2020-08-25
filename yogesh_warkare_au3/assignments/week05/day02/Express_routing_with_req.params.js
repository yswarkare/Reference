var express = require("express");

var app = express();

app.get("/:operation/:a/:b", function(req, res){
    var result;
    switch(req.params.operation){
        case "add" : result = parseFloat(req.params.a) + parseFloat(req.params.b);
        break;
        case "sub" : result = parseFloat(req.params.a) - parseFloat(req.params.b);
        break;
        case "mul" : result = parseFloat(req.params.a) * parseFloat(req.params.b);
        break;
        case "div" : result = parseFloat(req.params.a) / parseFloat(req.params.b);
        break;
        default: result = "Invalid Operator"
    }
    res.send(result.toString());
})

app.listen("3000", function(){
    console.log("Listening on port 3000");
})
