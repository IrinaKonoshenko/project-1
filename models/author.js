const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for author"],
  },
  lastName: {
    type: String,
    required: [true, "Set last name for author"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Author = model("Author", authorSchema);

module.exports = Author;
