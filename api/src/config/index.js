'use strict';

const config = {
  PORT: process.env.PORT || 8080,
  baseRequestUrl: process.env.REACT_APP_BASE_REQUEST_URL || 'localhost:8080',
  mongo: {
    URI: 'mongodb://mongodb:27017/timereports',
    options: { useNewUrlParser: true },
  },
};

module.exports = config;
