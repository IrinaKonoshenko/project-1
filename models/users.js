const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for user"],
  },
  lastName: {
    type: String,
    required: [true, "Set last name for user"],
  },
  email: {
    type: String,
    required: [true, "Set email for user"],
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    default: Date.now,
  },
});

usersSchema.virtual("age").get(function () {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dobnow = new Date(
    today.getFullYear(),
    this.dateOfBirth.getMonth(),
    this.dateOfBirth.getDate()
  );
  let age = today.getFullYear() - this.dateOfBirth.getFullYear();
  if (today < dobnow) {
    age = age - 1;
  }

  return age;
});

const Users = model("Users", usersSchema);

module.exports = Users;
