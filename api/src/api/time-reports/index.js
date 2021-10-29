'use strict';

const router = require('express').Router();
const routes = require('./routes');

router.get('/', routes.fetch);
router.post('/', routes.create);
router.put('/:id', routes.update);
router.delete('/:id', routes.destroy);

module.exports = router;
