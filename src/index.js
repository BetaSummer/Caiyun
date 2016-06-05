import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';

import App from './containers/app';
import Index from './containers/index';
import Family from './containers/family';
import Person from './containers/person';

// Redux devTool
import DevTools from './devTools';

import {store} from './store/';

const history = syncHistoryWithStore(browserHistory, store);

render(<div>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="family" component={Family}>
        </Route>
        <Route path="person/:id" component={Person}>
        </Route>
      </Route>
    </Router>
  </Provider>
  <DevTools store={ store }/>
</div>,document.getElementById('root'))
