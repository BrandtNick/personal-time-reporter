const WebSocket = require('ws');
const {green} = require('chalk');
const config = require('../config');

const ws = new WebSocket(`wss://${config.baseRequestUrl}/ws`);

const initSocket = () => {
  ws.on('open', () =>  {
    console.log(green('Connected to ws server'));
  });

  ws.on('error', err => {
    console.log('Error = ', err)
  })
};

module.exports = {
  initSocket,
  ws,
};
