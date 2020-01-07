'use strict';

const express = require('express');
const app = express();
const {blue, green} = require('chalk');
const http = require('http');
const {PORT} = require('./config');
const expressConfig = require('./components/express');
const initMongoose = require('./config/db');
const {initSocket} = require('./components/socket');

const initExpress = () => {
  console.log(blue.bold('Loading express..'));
  expressConfig(app);
  const server = http.createServer(app);

  return server
    .on('error', err => console.log(`Express HTTP server error: ${err.stack}`))
    .listen(PORT, () => console.log(green.bold(`Express server loaded: Listening on port ${PORT}.`)));
};

const start = async () => {
  await initExpress();
  await initSocket();
  await initMongoose();
};

module.exports = {
  start,
};

