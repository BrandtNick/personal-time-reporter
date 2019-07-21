// dashboard.selector.js

import {createSelector} from 'reselect';
import moment from 'moment';
import {
  divide,
  equals,
  head,
  length,
  map,
  pipe,
  prop,
  sort,
  sum,
  tail,
  values,
} from 'ramda';
import {HOURS} from '../constants';

const timeReportsSelector = state => state.data.timeReports;

const sortedTimeReportsSelector = createSelector(
  timeReportsSelector,
  timeReports => sort((a, b) => a.createdAt - b.createdAt, values(timeReports))
);

const earliestDateSelector = createSelector(
  sortedTimeReportsSelector,
  sortedTimeReports => moment(prop('date', head(sortedTimeReports)))
);

const oldestDateSelector = createSelector(
  sortedTimeReportsSelector,
  sortedTimeReports => moment(prop('date', tail(sortedTimeReports)))
);

const timeReportsAmountSelector = createSelector(
  timeReportsSelector,
  timeReports => pipe(values, length)(timeReports)
);

const totalHoursWorkedSelector = createSelector(
  timeReportsSelector,
  timeReports => pipe(values, map(prop(HOURS)), sum)(timeReports)
);

const monthlyHoursWorkedSelector = createSelector(
  earliestDateSelector,
  oldestDateSelector,
  totalHoursWorkedSelector,
  (earliestDate, oldestDate, totalHoursWorked) => {
    const monthsWorked = oldestDate.diff(earliestDate, 'month', true);
    const monthlyHoursWorked = divide(totalHoursWorked, monthsWorked);
    return monthlyHoursWorked.toFixed(1);
  }
);

const yearlyHourWorkedSelector = createSelector(
  earliestDateSelector,
  oldestDateSelector,
  totalHoursWorkedSelector,
  (earliestDate, oldestDate, totalHoursWorked) => {
    const yearsWorked = oldestDate.diff(earliestDate, 'year', true);
    const yearlyHoursWorked = divide(totalHoursWorked, yearsWorked);
    return equals(yearlyHoursWorked, Infinity) ? 'Unavailable' : yearlyHoursWorked.toFixed(1);
  }
);

export {
  timeReportsAmountSelector,
  monthlyHoursWorkedSelector,
  totalHoursWorkedSelector,
  yearlyHourWorkedSelector,
};
