import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import process from 'process';

import { db } from '../bin/config';
import routes from './routes/index';
import models from './models/index';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;
const host = '0.0.0.0';
 
  app.get('/', (req, res) => {
    res.send('Hello world');
  })

  mongoose.connect(`mongodb://mongo:${db.port}/mvc-example`, {useUnifiedTopology: true, useNewUrlParser: true}).then((connect) => {
    app.use('/', routes);
    app.listen(port, host, () => {
      console.log('Port and host is listening');
    })
}).catch((err) => {
  console.log(err.toString());
  process.exit(22);
});

export default app;