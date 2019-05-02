const express = require('express');
const helmet = require('helmet');

const foodRouter = require('../router/router.js');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', foodRouter);

module.exports = server;
