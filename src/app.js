const express = require('express');
const router = require('./routes') 

class App{
    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }
    routes(){
        this.server.use(router);
    }
}

module.exports = new App().server;