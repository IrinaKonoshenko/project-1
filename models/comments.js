const { Schema, model } = require("mongoose");

const commentsSchema = new Schema({
  content: {
    type: String,
    required: [true, "write a comment"],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: [true, "Set author for user"],
  },
  publicationDate: {
    type: Date,
    default: Date.now,
  },
  replayTo: {
    type: Schema.Types.ObjectId,
    ref: "Comments",
  },
});

const Comments = model("Comments", commentsSchema);
module.exports = Comments;
