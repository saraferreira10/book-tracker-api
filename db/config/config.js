const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../../config.env` });

module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    migrationStoragePath: "db/migrations",
    seederStoragePath: "db/seeders",
  },
  test: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    migrationStoragePath: "db/migrations",
    seederStoragePath: "db/seeders",
  },
  production: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    migrationStoragePath: "db/migrations",
    seederStoragePath: "db/seeders",
  },
};
