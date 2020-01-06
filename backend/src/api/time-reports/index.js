'use strict';

const router = require('express').Router();
const routes = require('./routes');
const {ws} = require('../../components/socket');

const authorize = token => new Promise((resolve, reject) => {
  const timeoutChecker = setTimeout(() => {
    reject('Connection timed out');
  }, 6000);

  ws.send(JSON.stringify({token}));
  ws.on('message', data => {
    const {isValidToken} = JSON.parse(data);
    if (isValidToken) {
      resolve();
      return clearTimeout(timeoutChecker);
    }
    reject('Unauthorized');
  });
});

// Authorization
router.use((req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).send('Unauthorized')
  }

  authorize(token)
    .then(() => next())
    .catch(err => res.status(401).send(err));
});

router.get('/', routes.fetch);
router.post('/', routes.create);
router.put('/:id', routes.update);
router.delete('/:id', routes.destroy);

module.exports = router;
