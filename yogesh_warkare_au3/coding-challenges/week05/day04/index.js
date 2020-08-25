var express = require("express");
var bodyParser = require("body-parser")

var app = express();

app.use(bodyParser.json())

var contacts = [{
    name: "name",
    phone: "phone-no"
    }
]

// Create

app.post("/", function(req, res){
    var contactItem = req.body
    contacts.push(contactItem)
    res.send(contacts)
})

// Read

app.get("/", function(req, res){
    res.send(contacts)
})

// Update

app.put("/", function(req, res){
    for (let i = 0; i< contacts.length; i++) {
        if (contacts[i].name.toLowercase() == req.body.name.toLowercase()) {
            contacts[i].phone = req.body.phone;       
        }   
    }
    res.send(contacts)
})

// Delete

app.delete("/", function(req, res){
    for (let i = 0; i< contacts.length; i++) {
        if (contacts[i].name.toLowercase() == req.body.name.toLowercase()) {
            contacts.splice(i, 1)       
        }   
    }
    res.send(contacts)
})

app.listen(8080, function(){
    console.log("App is running at 8000");
})