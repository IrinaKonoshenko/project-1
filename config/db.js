const mongoose = require("mongoose");

const DB_USER = "test";
const DB_PASS = "vbhtgn2010";
const DB_PROTOCOL = "mongodb+srv";
const DB_HOST = "cluster0.i9tmgy8.mongodb.net/project-1";

async function getConnection() {
  mongoose.set("strictQuery", false);
  return mongoose.connect(
    `${DB_PROTOCOL}://${DB_USER}:${DB_PASS}@${DB_HOST}?retryWrites=true&w=majority`
  );
}

module.exports = {
  getConnection,
};
