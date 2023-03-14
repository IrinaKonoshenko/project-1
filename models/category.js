const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  title: {
    type: String,
    required: [true, "write a title"],
  },
  description: {
    type: String,
  },
  ancestor: {
    type: String,
  },
});

const Category = model("Category", categorySchema);
module.exports = Category;
