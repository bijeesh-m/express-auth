
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    category: String,
    publishedYear: Number
})

const Books = mongoose.model("books", bookSchema)
module.exports = Books



