const express = require('express')
const router = express.Router()
const Book = require('../models/book')

// Getting all
router.get('/', async (req, res) => {
  try {
    const books = await Book.find()
    res.json(books)
  } catch (err) {
    res.status(500).json({
      message: err.message,
    })
  }
})

// Getting One
router.get('/book/:id', getBook, (req, res) => {
  res.json(res.book)
})

// Creating one
router.post('/book/', async (req, res) => {
  const book = new Book({
    bookName: req.body.bookName,
    author: req.body.author,
    price: req.body.price,
    image: req.body.image,
    publisher: req.body.publisher,
    publisherDate: req.body.publisherDate,
    genre: req.body.genre,
    language: req.body.language,
    summary: req.body.summary,
  })
  try {
    const newBook = await book.save()
    res.status(201).json(newBook)
  } catch (err) {
    res.status(400).json({
      message: err.message,
    })
  }
})

// Updating One
router.patch('/bookupdate/:id', getBook, async (req, res) => {
  if (req.body.bookName != null) {
    res.book.bookName = req.body.bookName
  }
  if (req.body.author != null) {
    res.book.author = req.body.author
  }
  if (req.body.price != null) {
    res.book.price = req.body.price
  }
  if (req.body.image != null) {
    res.book.image = req.body.image
  }
  if (req.body.publisher != null) {
    res.book.publisher = req.body.publisher
  }
  if (req.body.publisherDate != null) {
    res.book.publisherDate = req.body.publisherDate
  }
  if (req.body.genre != null) {
    res.book.genre = req.body.genre
  }
  if (req.body.language != null) {
    res.book.language = req.body.language
  }
  if (req.body.summary != null) {
    res.book.summary = req.body.summary
  }
  try {
    const updatedBook = await res.book.save()
    res.json(updatedBook)
  } catch (err) {
    res.status(400).json({
      message: err.message,
    })
  }
})

// Deleting One
router.delete('/bookdelete/:id', getBook, async (req, res) => {
  try {
    await res.book.remove()
    res.json({
      message: 'Deleted Book',
    })
  } catch (err) {
    res.status(500).json({
      message: err.message,
    })
  }
})

async function getBook(req, res, next) {
  let book
  try {
    book = await Book.findById(req.params.id)
    if (book == null) {
      return res.status(404).json({
        message: 'Cannot find book',
      })
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    })
  }

  res.book = book
  next()
}

module.exports = router