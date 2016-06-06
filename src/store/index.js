import {createStore, applyMiddleware, compose} from 'redux';

import {persistState} from 'redux-devtools';

import middleware from './middleware';
import rootReducer from '../reducers/';
import DevTools from '../devTools';

let finalCreateStore;

if (__DEV__) {
  finalCreateStore = compose(
    applyMiddleware.apply(this, middleware),
    DevTools.instrument(),
    persistState(getDebugSessionKey())
  )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware.apply(this, middleware)
  )(createStore);
}

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export const store = finalCreateStore(rootReducer);
