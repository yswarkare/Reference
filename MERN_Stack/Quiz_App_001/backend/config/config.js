require("dotenv").config();

module.exports = {
    MongoURI: process.env.MongoDB_URI,
    port: process.env.PORT,
}