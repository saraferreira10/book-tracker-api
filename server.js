const http = require("http");

const app = require("./app");

// (async () => {
//   try {
//     const sequelize = require("./data/database");
//     const Book = require("./models/books");

//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");

//     await sequelize.sync();

//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Listening...");
});
