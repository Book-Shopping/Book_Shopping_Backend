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
  }
})

module.exports = mongoose.model('Book', bookSchema)