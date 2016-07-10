import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';
import {store} from './store/';
const history = syncHistoryWithStore(browserHistory, store);
import App from './containers/app';

const Index = (nextState, callback) => {
  require.ensure([], require => {
    callback(null, require('./pages/index'));
  });
};
const Team = (nextState, callback) => {
  require.ensure([], require => {
    callback(null, require('./pages/team'));
  });
};
const About = (nextState, callback) => {
  require.ensure([], require => {
    callback(null, require('./pages/about'));
  });
};
const Person = (nextState, callback) => {
  require.ensure([], require => {
    callback(null, require('./pages/person'));
  });
};
export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute getComponent={Index}/>
      <Route path="home" getComponent={Index}/>
      <Route path="about" getComponent={About}/>
      <Route path="team" getComponent={Team}/>
      <Route path="user/:id" getComponent={Person}/>
    </Route>
  </Router>
);
