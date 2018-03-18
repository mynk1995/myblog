import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import ShowAllPosts from './components/ShowAllPosts/ShowAllPosts';
import CreatePost from './components/CreatePost/CreatePost';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ShowAllPosts} />
        <Route path="/createPost" component={CreatePost}></Route>
      </Route>
    </Router>
  </Provider>,document.getElementById("app"));

module.hot.accept();
