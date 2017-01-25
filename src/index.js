import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css';
import AWBoard from './AWBoard'
import { Router, Route, Link,browserHistory,IndexRoute } from 'react-router'
import Main from './Main'
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>

    <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="board" component={AWBoard}/>
    <Route path="main" component={Main}/>
    </Route>

  </Router>
  </Provider>,
  document.getElementById('main')
);
