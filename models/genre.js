const { Schema, model } = require("mongoose");

const genreSchema = new Schema({
  title: {
    type: String,
    required: [true, "write a title"],
  },
  description: {
    type: String,
  },
});

const Genre = model("Genre", genreSchema);
module.exports = Genre;
