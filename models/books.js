const { Schema, model } = require("mongoose");

const booksSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for user"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "Set author for user"],
  },
  description: {
    type: String,
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
  rating: {
    type: Number,
  },
});

const Books = model("Books", booksSchema);

module.exports = Books;
