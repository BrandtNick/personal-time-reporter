'use strict';

const router = require('express').Router();
const {red} = require('chalk');
const routes = require('./routes');

// Auth
router.use((req, res, next) => {
  console.log(red('Authderpication'));
  next();
});

router.get('/fetch', routes.fetch);
router.post('/create', routes.create);
router.put('/update', routes.update);
router.delete('/:id', routes.destroy);

module.exports = router;
