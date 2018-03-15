import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import CreatePost from './components/CreatePost/CreatePost';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/createPost" component={CreatePost}></Route>
      </Route>
    </Router>
  </Provider>,document.getElementById("app"));

module.hot.accept();
