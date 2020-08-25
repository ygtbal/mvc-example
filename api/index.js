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

  mongoose.connect(`mongodb://${db.host}:${db.port}/mvc-example`, {useUnifiedTopology: true, useNewUrlParser: true}).then((connect) => {
    app.use('/', routes);
    app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
}).catch(() => {
  process.exit(22);
});

export default app;