import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import './index.css';
import AWBoard from './AWBoard'
import { Router, Route, Link,browserHistory,IndexRoute } from 'react-router'
import Main from './Main'

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/" component={App}>
    <IndexRoute component={Main}/>
    <Route path="board" component={AWBoard}/>
    <Route path="main" component={Main}/>
    </Route>

  </Router>,
  document.getElementById('main')
);
