const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

sequelize
  .authenticate()
  .then(() => {
    sequelize
      .sync()
      .then(() => {
        console.log("DB Sync!");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("Conectado");
  })
  .catch((err) => {
    console.log("No se conecto" + err);
  });

module.exports = sequelize;
