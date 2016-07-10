import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// Redux devTool
import DevTools from './devTools';
import Routes from './routes';
import {store} from './store/';

render(<div>
  <Provider store={store}>
    {Routes}
  </Provider>
  {__DEV__ && <DevTools store={ store }/>}
</div>, document.getElementById('root'));
