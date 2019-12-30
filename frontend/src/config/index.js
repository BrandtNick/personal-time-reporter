// config/index.js

const DB = {
  host: 'http://localhost:8080',
};

const CONFIG = {
  env: process.env.NODE_ENV,
  authenticationUrl: process.env.REACT_APP_REDIRECT_URL || 'https://login.pixal.tech',
};

export {
  DB,
  CONFIG,
}