'use strict';
const _ = require('lodash');
const assert = require('assert');
const TimeReport = require('../../models').TimeReports;

const fetchTimeReports = (req, res, next) => {
  return TimeReport.find({})
    .exec()
    .then(timeReport => res.status(200).send(timeReport))
    .catch(next)
};

const setTimeReport = (req, res, next) => {
  const query = {
    _id: req.params.id,
  };
  return TimeReport.findOne(query)
    .exec()
    .then(timeReport => {
      if (!timeReport) {
        return res.status(403).send(new Error('Time report not found'));
      }
      req.timeReport = timeReport;
      return next();
    });

};

const showTimeReport = (req, res, next) => {
  assert(req.timeReport, 'Time report should already have been set by middleware');
  return res.status(201).send(req.timeReport.getPublic());
};

const createTimeReport = (req, res, next) => {
  const timeReportData = req.body.timeReport;
  return Promise.resolve(new TimeReport(timeReportData))
    .then(timeReport => timeReport.save())
    .then(timeReport => res.status(200).send(timeReport.getPublic()))
    .catch(next);
};

const updateTimeReport = (req, res, next) => {
  assert(req.timeReport, 'Time report should already have been set by middleware');
  const updates = req.body.updates;
  return req.timeReport.saveUpdates(updates)
    .then(timeReport => res.status(200).send(timeReport.getPublic()))
    .catch(next);
};

const destroyTimeReport = (req, res, next) => {
  assert(req.timeReport, 'Time report should already have been set by middleware');
  return req.timeReport.remove()
    .then(obj => res.status(201).send(obj))
    .catch(next);
};

const handleError = (err, req, res, next) => {
  console.error('Error in timereports endpoints', err.stack);
  return res.status(500).send(err.message);
};

module.exports = {
  fetchTimeReports,
  setTimeReport,
  showTimeReport,
  createTimeReport,
  updateTimeReport,
  destroyTimeReport,
  handleError,
};