import 'reflect-metadata';

import express from 'express';

import routes from './routes';
import './database';

const app = express();

app.use(routes);

app.listen(4000, () => {
  console.log('Localhost port 4000');
});
