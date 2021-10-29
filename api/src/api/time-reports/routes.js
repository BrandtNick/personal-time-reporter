'use strict';

const compose = require('compose-middleware').compose;
const mw = require('./middlewares');

const fetch = compose([
  mw.fetchTimeReports,
  mw.handleError,
]);

const show = compose([
  mw.setTimeReport,
  mw.showTimeReport,
  mw.handleError,
]);

const create = compose([
  mw.createTimeReport,
  mw.handleError,
]);

const update = compose([
  mw.setTimeReport,
  mw.updateTimeReport,
  mw.handleError,
]);

const destroy = compose([
  mw.setTimeReport,
  mw.destroyTimeReport,
  mw.handleError,
]);

module.exports = {
  fetch,
  show,
  create,
  update,
  destroy,
};
