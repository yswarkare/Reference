var express = require ("express");
var exphbs = require ("express-handlebars");

var app = express();

app.enging("hbs", exphbs({ defaultLayout: "main", extname: ".hbs"}));

app.set("view engine", "hbs");

var me = {
    firstname: "Yogesh",
    lastname: "Warkare",
    bio: "Watching movies and TV shows is my favourate passtime sice childhood. I grew up watching Marathi, Hindi movies and TV Shows, occationally some Hindi dubbed Hollywood movies. I used to watch hollywood movies dubbed in Hindi, but sience college days I started to watch them in English, and I also started to watch American TV Shows. Up until now I have seen many movies and TV shows.",
    movies: ["Inception", "Interstellar", "The Prestige", "The Following", "The Dark Knight" ]
};

app.get("/", function(req, res){
    res.render("aboutme", {
        data: me,
        title: "About Me"
    });
});

app.listen(3000, function (){
    console.log("listening on port 3000")
})