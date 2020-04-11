const Sequelize = require("sequelize");

const db = new Sequelize("todosData", "postgres", "Yogesh.2580", {
    host: "localhost",
    port: 4227,
    dialect: "postgres",
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

  module.exports = db;