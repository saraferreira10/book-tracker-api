const { validationResult } = require("express-validator");

const Book = require(`${__dirname}/../models/books`);

exports.getAll = async (req, res) => {
  try {
    const books = await Book.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res
      .status(200)
      .json({ status: "success", length: books.length, data: { books } });
  } catch (e) {
    res.status(500).json({ status: "fail", message: e.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).json({ status: "success", data: book });
  } catch (e) {
    res.status(500).json({ status: "fail", message: e.message });
  }
};

exports.save = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ status: "fail", errors: errors.array() });
  }

  try {
    const { title, author, description } = req.body;

    const objBook = { title, author, description };

    if (req.body.imgUrl) {
      objBook.imgUrl = req.body.imgUrl;
    }

    if (req.body.status) {
      objBook.status = req.body.status;
    }

    const newBook = await Book.create(objBook);
    await newBook.save();
    res.status(201).json({ status: "success", book: { newBook } });
  } catch (e) {
    res.status(500).json({ status: "fail", message: e.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Book.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json("");
  } catch (e) {
    res.status(500).json({ status: "fail", message: e.message });
  }
};

exports.update = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ status: "fail", errors: errors.array() });
  }

  try {
    const book = await Book.findByPk(req.params.id);
    const { title, author, description, imgUrl, status } = req.body;

    book.id = req.params.id;
    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.imgUrl = imgUrl || book.imgUrl;
    book.status = status || book.status;

    const newBook = await book.save();
    res.status(200).json({ status: "success", data: newBook });
  } catch (e) {
    res.status(500).json({ status: "fail", message: e.message });
  }
};

// middleware params
exports.checkID = async (req, res, next) => {
  const book = await Book.findByPk(req.params.id);

  if (!book) {
    return res.status(404).json({ status: "fail", message: "book not found" });
  }

  next();
};
