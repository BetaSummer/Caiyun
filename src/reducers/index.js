import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

// import some splited reducers
import user from './user';
import tab from './tab';

// key in combineReducers object is same as the key in state;
const rootReducer = combineReducers({
  // combine some splited reducers
  routing: routerReducer,
  user: user,
  tab: tab,
});

export default rootReducer;
