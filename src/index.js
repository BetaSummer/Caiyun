import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory, IndexRoute, Route } from 'react-router';

import App from './containers/app';
import Index from './pages/index/';
import Team from './pages/team/';
import About from './pages/about/';
import Blog from './pages/blog/';
import Person from './pages/person/';

// Redux devTool
// import DevTools from './devTools';

import {store} from './store/';

const history = syncHistoryWithStore(browserHistory, store);

render(<div>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="home" component={Index}/>
        <Route path="about" component={About}/>
        <Route path="blog" component={Blog}/>
        <Route path="team" component={Team}/>
        <Route path="person/:id" component={Person}/>
      </Route>
    </Router>
  </Provider>
  {/* <DevTools store={ store }/> */}
</div>, document.getElementById('root'));
