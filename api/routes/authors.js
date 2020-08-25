import express from 'express';
import model from '../models/index';

const app = express();

app.get('/', (req, res) => {
 model.authors.find({}, (err, data) => {
    return res.json({
      type: true,
      data,
    });
  });
});

module.exports = app;