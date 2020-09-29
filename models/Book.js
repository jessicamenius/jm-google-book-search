const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  authors: [String],
  description: { type: String },
  image: { type: String },
  link: { type: String },
});

module.exports = Book = mongoose.model("book", bookSchema);
