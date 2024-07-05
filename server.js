const http = require("http");

const app = require("./app");

(async () => {
  try {
    const sequelize = require("./data/database");
    const Book = require("./models/books");

    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync();

    // const newBook = await Book.create({
    //   title: "teste2",
    //   author: "author teste2",
    //   description: "jkljlk",
    //   status: "Lido"
    // });

    // await newBook.save()

    // const books = await Book.findAll({
    //   where: {
    //     status: "Lido",
    //   },
    // });

    // console.log(books);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Listening...");
});
