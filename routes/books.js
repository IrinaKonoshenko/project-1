const express = require("express");
const {
  getBooks,
  createBook,
  getBookById,
  removeBook,
  updateBook,
  pathBook,
} = require("../controllers/books");
const router = express.Router();

router.get("/", getBooks);

router.get("/:bookId", getBookById);

router.post("/", createBook);

router.put("/:bookId", updateBook);

router.delete("/:bookId", removeBook);

router.patch("/bookId", pathBook);

module.exports = router;
