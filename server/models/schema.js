const mongoose = require('mongoose');
const BookSchema = new mongoose.Schema({
  title: {
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
 });
module.exports = schema = mongoose.model('schema', BookSchema);