const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const cardSchema = new Schema({
  type: {
    type: Number,
    required: 'Please supply a type'
  }, /* 1 for vocab, 2 for code */
  front: {
    type: String,
    unique: true,
    trim: true,
    required: 'Please supply a front content'
  },
  back: {
    type: String,
    unique: true,
    trim: true,
    required: 'Please supply a back content'
  },
  known: {
    type: Boolean,
    required: 'Please supply a known'
  }
})

module.exports = mongoose.model('Card', cardSchema)
