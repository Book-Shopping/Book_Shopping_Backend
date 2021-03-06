require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to mongoDB'))

app.use(express.json())
app.use(cors())

const booksRouter = require('./routes/book')
app.use('/books', booksRouter)

app.listen(8080, () => console.log('Server Started...'))