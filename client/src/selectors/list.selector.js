// time-reports.selector.js

import {createSelector} from 'reselect';
import {
  add,
  divide,
  equals,
  length,
  pipe,
  slice,
  values,
  map,
  head,
  nth,
  includes,
  filter,
  split,
  prop,
} from 'ramda';
import moment from 'moment';
import {createDateArray, uniqAndSort} from '../utils';

const listSelector = state => state.data.timeReports;
const pageSelector = state => state.view.page;
const pageSizeSelector = state => state.view.pageSize;
const yearSelector = state => state.view.year;
const monthSelector = state => state.view.month;

const yearsAvailableSelector = createSelector(
  listSelector,
  timeReports => (
    pipe(
      createDateArray,
      map(head),
      uniqAndSort,
      map(value => ({name: value, value}))
    )(timeReports)
  )
);

const monthsAvailableSelector = createSelector(
  listSelector,
  timeReports => (
    pipe(
      createDateArray,
      map(nth(1)),
      uniqAndSort,
      map(value => ({name: moment(value).format('MMMM'), value}))
    )(timeReports)
  )
);

const yearFilteredTimeReportsSelector = createSelector(
  listSelector,
  yearSelector,
  (timeReports, year) => (
    year ?
      pipe(
        filter(pipe(
          prop('date'),
          split('-'),
          head,
          includes(year)
        ))
      )(timeReports) :
      timeReports
  )
);

const monthFilteredTimeReportsSelector = createSelector(
  yearFilteredTimeReportsSelector,
  monthSelector,
  (timeReports, month) => (
    month ?
      pipe(
        filter(pipe(
          prop('date'),
          split('-'),
          nth(1),
          includes(month)
        ))
      )(timeReports) :
      timeReports
  )
);

const filteredTimeReportsSelector = createSelector(
  monthFilteredTimeReportsSelector,
  timeReports => {
    return timeReports;
  }
);

const paginatedTimeReportsSelector = createSelector(
  filteredTimeReportsSelector,
  pageSelector,
  pageSizeSelector,
  (timeReports, page, pageSize) => {
    const startIndex = page * pageSize;
    const endIndex = (page + 1) * pageSize;
    return pipe(
      values,
      slice(startIndex, endIndex),
    )(timeReports);
  }
);

const numberOfPagesSelector = createSelector(
  filteredTimeReportsSelector,
  pageSizeSelector,
  (timeReports, pageSize) => {
    const computeNumberOfPages = listLength => divide(listLength, pageSize);
    return pipe(
      values,
      length,
      computeNumberOfPages,
      Math.ceil,
    )(timeReports);
  }
);

const maxPageReachedSelector = createSelector(
  numberOfPagesSelector,
  pageSelector,
  (numberOfPages, page) => equals(add(page, 1), numberOfPages)
);

const minPageReachedSelector = createSelector(
  pageSelector,
  page => equals(page, 0)
);

export {
  pageSelector,
  listSelector,
  yearsAvailableSelector,
  paginatedTimeReportsSelector,
  numberOfPagesSelector,
  maxPageReachedSelector,
  minPageReachedSelector,
  monthsAvailableSelector,
};
