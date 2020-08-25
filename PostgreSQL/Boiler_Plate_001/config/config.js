require("dotenv").config();

module.exports = {
    PSQL_URI: process.env.PostgreSQL_URI,
    port: process.env.PORT,
    SECRET: process.env.APP_SECRET
}