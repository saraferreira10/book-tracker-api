const express = require("express");

const bookRoutes = require(`${__dirname}/routes/bookRoutes`);

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/books", bookRoutes);

app.get("/", (req, res) => {
  res.status(404).json({ code: 404 });
});

module.exports = app;
