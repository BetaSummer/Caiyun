import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// import some splited reducers

// key in combineReducers object is same as the key in state;
const rootReducer = combineReducers({
  // combine some splited reducers
  routing: routerReducer,
});

export default rootReducer;
