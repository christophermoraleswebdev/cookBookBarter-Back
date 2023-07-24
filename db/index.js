const mongoose = require('mongoose')
const url = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/cookBookBarter'

mongoose
  .connect('mongodb://127.0.0.1:27017/cookBookBarter')
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
  
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db