'use strict';

const _ = require('lodash');
const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    hours: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    }
  },
  {
    timestamps: true
  }
);

schema.methods.getPublic = function () {
  const properties = ['_id', 'name', 'description', 'hours', 'date'];
  return _.pick(this, properties);
};

module.exports = mongoose.model('TIMEREPORT', schema);
