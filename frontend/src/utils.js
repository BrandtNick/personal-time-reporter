// utils.js

// Modules
import {forEachObjIndexed, has, keys, map, pipe, prop, sort, split, uniq, values} from 'ramda';
import {STATE_LOGGER_COLORS} from './constants';

const combineReducers = reducers => {
  const reducerKeys = keys(reducers);

  return (state = {}, action) => {
    const nextState = {};

    forEachObjIndexed((val, i) => {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      nextState[key] = reducer(previousStateForKey, action);
    }, reducerKeys);

    return nextState;
  }
};

const createReducer = (initialState, handlers) => (
  (state = initialState, action) => {
    if (has(action.type, handlers)) {
      return handlers[action.type](state, action)
    }
    return state;
  }
);

const logState = reducer => (state, action) => {
  console.log('%cPrevious State:', `color: ${STATE_LOGGER_COLORS.grey};`, state);
  console.log('%cAction:', `color: ${STATE_LOGGER_COLORS.blue};`, action);
  console.log('%cNext State:', `color: ${STATE_LOGGER_COLORS.green};`, reducer(state, action));
  return reducer(state, action);
};


const createDateArray = pipe(
  values,
  map(prop('date')),
  map(split('-')),
);

const uniqAndSort = pipe(
  uniq,
  sort((a, b) => b - a),
);

export {
  combineReducers,
  createReducer,
  logState,
  createDateArray,
  uniqAndSort,
}