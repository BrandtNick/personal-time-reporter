'use strict';
const config = {
  PORT: 8080,
  mongo: {
    URI: 'mongodb://localhost/time-reports',
    options: { useNewUrlParser: true },
  },
};

module.exports = config;