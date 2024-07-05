const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../config.env` });

const Sequelize = require("sequelize");

const { DATABASE, USER, PASSWORD } = process.env;

const db = new Sequelize(DATABASE, USER, PASSWORD, {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;
