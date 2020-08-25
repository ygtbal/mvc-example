import express from 'express';
import model from '../models/index';
import books from '../models/books';

const app = express();

app.get('/', (req, res) => {
 model.books.find({}, (err, data) => {
    return res.json({
      type: true,
      data,
    });
  });
});

module.exports = app;