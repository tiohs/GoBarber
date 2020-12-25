import express from 'express';
import router from './routes';

class App {
  constructor() {
    this.server = express();

    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(router);
  }
}

export default new App().server;
