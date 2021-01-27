import express from 'express';
import router from './routes';
import { resolve } from 'path';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }
  routes() {
    this.server.use(router);
  }
}

export default new App().server;
