import mongoose from 'mongoose';
const schema = mongoose.Schema({
  title: String,
  content: String,
})

module.exports = mongoose.model("books", schema);