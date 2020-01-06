const WebSocket = require('ws');
const {green} = require('chalk');

const ws = new WebSocket('ws://localhost:8888/ws');

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