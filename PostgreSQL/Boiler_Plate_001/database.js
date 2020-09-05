const Sequelize = require("sequelize");
const { PSQL_URI } = require("./config/config");
const { success, error, info } = require("consola");

const db = new Sequelize(PSQL_URI);

db.authenticate()
.then(() => {
    success({message: 'Connection has been established successfully.', badge: true})
})
.catch((err) => {
    error({message: `Unable to connect to the database : \n ${err}`, badge: true, error: {err}});
});

module.exports = db;