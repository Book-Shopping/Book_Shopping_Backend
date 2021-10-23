const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: false
  },
  publisherDate: {
    type: String,
    required: false
  },
  genre: {
    type: String,
    required: false
  },
  language: {
    type: String,
    required: false
  },
  summary: {
    type: String,
    required: false
  },
})

module.exports = mongoose.model('Book', bookSchema)