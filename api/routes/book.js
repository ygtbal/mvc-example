import express from 'express';

import model from '../models/index';
import {createBook} from '../controllers/bookController';
const app = express();


app.get('/', (req, res) => {
 model.books.find({}, (err, data) => {
    return res.json({
      type: true,
      data,
    });
  });
});

app.post('/', createBook);

module.exports = app;