const http = require("http");
const app = require("./app");

let server = http.createServer(app);


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);


server.listen(3010, function(){
    console.log("Connection is Ready");
});
