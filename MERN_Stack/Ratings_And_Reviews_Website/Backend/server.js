const http = require("http");
const app = require("./app");
// const {PORT} = require("./Config/config");


let server = http.createServer(app);

const port = process.env.PORT || 5000


server.listen(port, function(){
    console.log(`Connection is Ready on port ${port}`);
});