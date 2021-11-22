import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import configAvatar from './config/uploads';
import routes from './routes';
import './database';
import AppError from './error/AppError';

const app = express();

app.use(express.json());
app.use('/files', express.static(configAvatar.directory));
app.use(routes);
app.use((err: Error, _request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  console.error(err);
  return response.status(500).json({
    status: 500,
    message: 'Interno Error ',
  });
});
app.listen(4000, () => {
  console.log('Localhost port 4000');
});
