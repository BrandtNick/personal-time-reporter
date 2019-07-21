// view.state.js

import {
  mapObjIndexed,
  gte,
  is,
  lte,
  mergeAll,
  set,
} from 'ramda';
import moment from 'moment';
import {createReducer} from '../utils';
import {IS_VALID_TIME_REPORT, PAGE, TIME_REPORT} from '../constants';
import lenses from '../lenses';

const actionTypes = {
  TIME_REPORT_SET_FORM_DATA: 'TIME_REPORT_SET_FORM_DATA',
  TIME_REPORT_RESET_FORM: 'TIME_REPORT_RESET_FORM',
  TIME_REPORT_SET_PAGE: 'TIME_REPORT_SET_PAGE',
  TIME_REPORT_SELECT_YEAR: 'TIME_REPORT_SELECT_YEAR',
  TIME_REPORT_SELECT_MONTH: 'TIME_REPORT_SELECT_MONTH',
  TIME_REPORT_SET_NAME_FILTER: 'TIME_REPORT_SET_NAME_FILTER',
};

const actions = {
  setTimeReport: timeReport => ({
    type: actionTypes.TIME_REPORT_SET_FORM_DATA,
    timeReport,
  }),
  resetFormData: () => ({
    type: actionTypes.TIME_REPORT_RESET_FORM,
  }),
  setPage: page => ({
    type: actionTypes.TIME_REPORT_SET_PAGE,
    page,
  }),
  selectYear: year => ({
    type: actionTypes.TIME_REPORT_SELECT_YEAR,
    year,
  }),
  selectMonth: month => ({
    type: actionTypes.TIME_REPORT_SELECT_MONTH,
    month,
  }),
  setNameFilter: nameFilter => ({
    type: actionTypes.TIME_REPORT_SET_NAME_FILTER,
    nameFilter,
  }),
};

const timeReportValidators = {
  name: val => (is(String, val) && !!val.length),
  date: val => {
    const currentYear = moment(Date.now()).year();
    const year = moment(val).year();
    const isValidYear = gte(year, 1970) && lte(year, currentYear);
    const isValidDate = moment(val).isValid();
    return (is(String, val) && isValidDate && isValidYear)
  },
  hours: val => (is(String, val) && gte(val, 1)) && lte(val, 24),
};

const defaultState = {
  [TIME_REPORT]: {
    name: '',
    date: 0,
    hours: '',
  },
  [IS_VALID_TIME_REPORT]: {
    name: false,
    date: false,
    hours: false,
  },
  [PAGE]: 0,
  pageSize: 10,
  month: null,
  year: null,
  nameFilter: '',
};

const handlers = {
  [actionTypes.TIME_REPORT_SET_FORM_DATA]: (state, {timeReport}) => {
    const isValidTimeReport = mapObjIndexed((validate, key) => (
      validate(timeReport[key])
    ), timeReportValidators);
    return mergeAll([state, {timeReport, isValidTimeReport}]);
  },
  [actionTypes.TIME_REPORT_RESET_FORM]: (state) => {
    const timeReport = defaultState[TIME_REPORT];
    const isValidTimeReport = defaultState.isValidTimeReport;
    return mergeAll([state, {timeReport, isValidTimeReport}]);
  },
  [actionTypes.TIME_REPORT_SET_PAGE]: (state, {page}) => (
    set(lenses.page, page, state)
  ),
  [actionTypes.TIME_REPORT_SELECT_YEAR]: (state, {year}) => (
    set(lenses.year, year, state)
  ),
  [actionTypes.TIME_REPORT_SELECT_MONTH]: (state, {month}) => (
    set(lenses.month, month, state)
  ),
  [actionTypes.TIME_REPORT_SET_NAME_FILTER]: (state, {nameFilter}) => (
    set(lenses.nameFilter, nameFilter, state)
  ),
};

const reduce = createReducer(defaultState, handlers);

export {
  actions,
  reduce,
  defaultState,
};