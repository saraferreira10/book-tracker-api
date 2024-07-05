const Book = require(`${__dirname}/../models/books`);

exports.getAll = async (req, res) => {
  try {
    const books = await Book.findAll();
    res
      .status(200)
      .json({ status: "success", data: { books }, length: books.length });
  } catch (e) {
    res.status(500).json({ status: "fail", message: e.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    res.status(200).json({ status: "success", data: book });
  } catch (e) {
    res.status(500).json({ status: "fail", message: e.message });
  }
};

exports.save = async (req, res) => {
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
    const { title, author, description } = req.body;

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
  try {
    const book = await Book.findByPk(req.params.id);
    const { title, author, description, imgUrl, status } = req.body;

    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.imgUrl = imgUrl || book.imgUrl;
    book.status = status || book.status;

    await book.save();
    res.status(200).json({ status: "success", data: book });
  } catch (e) {
    res.status(500).json({ status: "fail", message: e.message });
  }
};

// middleware params
exports.checkID = async (req, res, next) => {
  const book = await Book.findByPk(req.params.id);
  if (book) {
    return next();
  }

  res.status(404).json({ status: "fail", message: "book not found" });
};
