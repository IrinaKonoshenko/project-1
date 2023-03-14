const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
  title: {
    type: String,
    required: [true, "write a title"],
  },
  color: {
    type: String,
  },
});

const Tag = model("Tag", tagSchema);
module.exports = Tag;
