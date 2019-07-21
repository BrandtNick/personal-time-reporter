// db.js

const mongoose = require('mongoose');
const {blue, green} = require('chalk');
const {mongo: {URI, options}} = require('../config');

const initMongoose = async () => {
  console.log(blue.bold('Connecting to mongoose'));
  return mongoose.connect(URI, options)
    .then(() => console.log(green.bold('Connected to mongoose')))
    .catch(err => console.error(err));
};

module.exports = initMongoose;