const express = require('express');
const { createServer } = require('http');
const { dbConnection } = require('../database/config');
const betRoutes = require('../src/bets/routes/bets')

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.paths = {
            bets: '/bets'
        }

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
    }

    routes() {
        this.app.use(this.paths.bets, betRoutes);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on port', this.port );
        });
    }

}

module.exports = Server;
