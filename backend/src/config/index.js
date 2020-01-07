'use strict';

const username = 'admin';
const password = 'gT1xXad221x';

const config = {
  PORT: process.env.PORT || 8080,
  baseRequestUrl: process.env.REACT_APP_BASE_REQUEST_URL || 'localhost:8888',
  mongo: {
    URI: 'mongodb://' + username + ':' + password + '@mongodb:27017/timereports?authSource=admin',
    options: { useNewUrlParser: true },
  },
};

module.exports = config;
