const { Pool } = require("pg");

const db = new Pool({
    user: "postgres",
    host: "localhost",
    port: "4227",
    database: "songsData",
    password: ""
})

module.exports = db;