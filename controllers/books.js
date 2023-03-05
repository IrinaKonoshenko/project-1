const Books = require("../models/books");
const booksValidateSchema = require("../models/books.validation");

const getBooks = async (req, res) => {
  const books = await Books.find({});
  return res.json({ items: books });
};

const createBook = async (req, res) => {
  const errors = booksValidateSchema.validate(req.body);
  if (errors.error && errors.error.details.length > 0) {
    return res.status(400).json({ message: errors.error.details });
  }
  const book = await Books.create(req.body);
  return res.json({ book });
};

const getBookById = async (req, res) => {
  const book = await Books.findById(req.params.bookId);
  if (!book) {
    return res.status(400).json({ message: "Not found" });
  }
  return res.json({ book });
};

const removeBook = async (req, res) => {
  const book = await Books.findByIdAndDelete(req.params.bookId);
  if (!book) {
    return res.status(400).json({ message: "Not found" });
  }
  return res.json({ book });
};

const updateBook = async (req, res) => {
  const errors = booksValidateSchema.validate(req.body);
  if (errors.error && errors.error.details.length > 0) {
    return res.status(400).json({ message: errors.error.details });
  }
  const book = await Books.findByIdAndUpdate(req.params.bookId, req.body);
  if (!book) {
    return res.status(400).json({ message: "Not found" });
  }
  return res.json({ book });
};

const pathBook = async (req, res) => {
  const book = await Books.findByIdAndUpdate(req.params.bookId, req.body);
  if (!book) {
    return res.status(400).json({ message: "Not found" });
  }
  return res.json({ book });
};

module.exports = {
  getBooks,
  createBook,
  getBookById,
  removeBook,
  updateBook,
  pathBook,
};
