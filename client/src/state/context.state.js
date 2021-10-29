// context.state.js

import {mergeAll} from 'ramda';
import React, {createContext, useReducer, useMemo} from 'react';
import {defaultState as data} from './data.state';
import {defaultState as view} from './view.state';
import rootReducer from './root-reducer';
import {logState} from '../utils';

const defaultState = mergeAll([
  {data},
  {view},
]);

const StateContext = createContext({});

const StateContextProvider = props => {
  const [state, dispatch] = useReducer(logState(rootReducer), defaultState);
  const value = useMemo(() => {
    return {state, dispatch}
  }, [state]);

  return (
    <StateContext.Provider value={value}>
      {props.children}
    </StateContext.Provider>
  );
};

export {
  StateContext,
  StateContextProvider,
};
