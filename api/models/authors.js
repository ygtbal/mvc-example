import mongoose from 'mongoose';
const schema = mongoose.Schema({
  name: String,
  lastName: String,
})

module.exports = mongoose.model("authors", schema);