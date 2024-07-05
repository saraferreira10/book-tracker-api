const Sequelize = require("sequelize");
const db = require("../data/database");

const Book = db.define("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://cdn.radiojotafm.com.br/upload/dn_noticia/2019/10/livro.jpg",
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Quero ler",
  },
});

module.exports = Book;
