// config/index.js

const DB = {
  host: 'http://localhost:8080',
};

const CONFIG = {
  domain: process.env.REACT_APP_DOMAIN,
  baseRequestTimeout: 16000,
  env: process.env.NODE_ENV,
  baseRequestUrl: process.env.REACT_APP_BASE_REQUEST_URL || 'http://localhost:8080',
  authenticationUrl: process.env.REACT_APP_REDIRECT_URL || 'http://localhost:9000',
};

export {
  DB,
  CONFIG,
}