'use strict';
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('../api');

const applyMiddlewares = app => {
  app.use(cors());
  app.use(morgan('combined')); // Init HTTP logger
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json({limit: '100kb'}));
};

const expressConfig = app => {
  applyMiddlewares(app);
  api.applyRoutes(app);
};

module.exports = expressConfig;