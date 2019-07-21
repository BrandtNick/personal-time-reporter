// data.state.js

import {
  always,
  assoc,
  indexBy,
  omit,
  prop,
  set,
} from 'ramda';
import {createReducer} from '../utils';
import {ID, RESET, TIME_REPORTS} from '../constants';
import lenses from '../lenses';

const actionTypes = {
  TIME_REPORT_SET: 'TIME_REPORT_SET',
  TIME_REPORT_ADD: 'TIME_REPORT_ADD',
  TIME_REPORT_UPDATE: 'TIME_REPORT_UPDATE',
  TIME_REPORT_REMOVE: 'TIME_REPORT_REMOVE',
};

const actions = {
  fetchTimeReports: timeReports => ({
    type: actionTypes.TIME_REPORT_SET,
    timeReports,
  }),
  addTimeReport: timeReport => ({
    type: actionTypes.TIME_REPORT_ADD,
    timeReport,
  }),
  removeTimeReport: timeReportId => ({
    type: actionTypes.TIME_REPORT_REMOVE,
    timeReportId,
  }),
};

const defaultState = {
  [TIME_REPORTS]: {},
};

const handlers = {
  [actionTypes.TIME_REPORT_SET]: (state, {timeReports}) => (
    set(lenses.timeReports, indexBy(prop(ID), timeReports), state)
  ),
  [actionTypes.TIME_REPORT_ADD]: (state, {timeReport}) => (
    set(lenses.timeReports, assoc(timeReport._id, timeReport, state.timeReports), state)
  ),
  [actionTypes.TIME_REPORT_UPDATE]: (state, {timeReport}) => (
    set(lenses.timeReports, assoc(timeReport._id, timeReport, state.timeReports), state)
  ),
  [actionTypes.TIME_REPORT_REMOVE]: (state, {timeReportId}) => (
    set(lenses.timeReports, omit([timeReportId], state.timeReports), state)
  ),
  [RESET]: always(defaultState)
};

const reduce = createReducer(defaultState, handlers);

export {
  actions,
  reduce,
  defaultState,
};