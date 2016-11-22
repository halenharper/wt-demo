import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './containers/App/App';
import Chat from './containers/Chat';
import Message from './containers/Message';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="chat" component={Chat} />
      <Route path="message" component={Message} />
    </Route>
  </Router>,
  document.getElementById('root')
);
