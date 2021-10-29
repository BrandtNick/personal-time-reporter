'use strict';

const timeReports = require('./time-reports');

const applyRoutes = app => {
  app.use('/api/time-reports', timeReports);

  app.route('/*').get((req, res) => {
    res.sendStatus(404);
  });
};

module.exports = {
  applyRoutes,
};
