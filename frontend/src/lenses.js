// lenses.js

import {lensProp} from 'ramda';
import {
  HOURS,
  ID,
  MONTH,
  YEAR,
  PAGE,
  RESET,
  TIME_REPORT,
  TIME_REPORTS,
  NAME_FILTER,
} from './constants';

const lenses = {
  id: lensProp(ID),
  reset: lensProp(RESET),
  timeReports: lensProp(TIME_REPORTS),
  timeReport: lensProp(TIME_REPORT),
  hours: lensProp(HOURS),
  page: lensProp(PAGE),
  year: lensProp(YEAR),
  month: lensProp(MONTH),
  nameFilter: lensProp(NAME_FILTER),
};

export default lenses;