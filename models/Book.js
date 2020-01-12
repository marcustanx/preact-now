const mongoose = require('mongoose');
const MongoClient = require('mongodb');

const BookSchema = new MongoClient.Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  published_date: {
    type: Date
  },
  publisher: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

// const BookSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   isbn: {
//     type: String,
//     required: true
//   },
//   author: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String
//   },
//   published_date: {
//     type: Date
//   },
//   publisher: {
//     type: String
//   },
//   updated_date: {
//     type: Date,
//     default: Date.now
//   }
// });

module.exports = Book = MongoClient.model('book', BookSchema);

// module.exports = Book = mongoose.model('book', BookSchema);
