const { Schema, model } = require("mongoose");

const booksSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for user"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
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
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
      required: [true, "write a comment"],
    },
  ],
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "book categories"],
    },
  ],
  genre: [
    {
      type: Schema.Types.ObjectId,
      ref: "Genre",
      required: [true, "book genres"],
    },
  ],
  tag: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag",
      required: [true, "book tags"],
    },
  ],
});

const Books = model("Books", booksSchema);

module.exports = Books;
