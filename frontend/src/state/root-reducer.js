// root-reducer.js

// Local components
import {combineReducers} from "../utils";

// Reducers
import {reduce as view} from './view.state';
import {reduce as data} from './data.state';

const rootReducer = combineReducers({
  view,
  data,
});

export default rootReducer;
