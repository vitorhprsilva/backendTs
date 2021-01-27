const express = require('express');
const cors = require('cors');


const routes = require('./routes');

class App{

    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json());
        this.server.use(express.json({ type: 'application/vnd.api+json' }));
        this.server.use(cors());
    }

    routes(){
        this.server.use(routes);
    }

}

module.exports = new App().server;