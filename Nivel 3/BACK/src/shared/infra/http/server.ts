import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import { errors } from 'celebrate';
import 'express-async-errors';
import cors from 'cors';

import configAvatar from '@config/uploads';
import routes from '@shared/infra/http/routes';
import '@shared/infra/typeorm';
import '@shared/container';

import AppError from '@shared/error/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(configAvatar.directory));
app.use(routes);
app.use(errors);
app.use(
  (err: Error, _request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message,
      });
    }
    console.log(err);
    return response.status(500).json({
      status: 500,
      message: 'Interno Error ',
    });
  },
);
app.listen(4000, () => {
  console.log('Localhost port 4000');
});
