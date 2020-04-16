import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Switch,BrowserRouter,Route } from 'react-router-dom';

import MemoIndex from './components/memoIndex';
import MemoNew from './components/memoNew';
import MemoShow from './components/memoShow';
import reducer from './reducers';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
      <Route path="/new" component={MemoNew} />
      <Route path="/show/:id" component={MemoShow} />
      <Route expect path="/" component={MemoIndex} />
      <Route expect path="/index" component={MemoIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
