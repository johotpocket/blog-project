import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Home from './Containers/HomeContainer';
import AllPostsContainer from './Containers/AllPostsContainer';
import About from './Containers/AboutContainer';
import PostContainer from './Containers/PostContainer';
import ShowPostContainer from './Containers/ShowPostContainer';
import EditPostContainer from './Containers/EditPostContainer';
import SignupContainer from './UserAuth/SignupContainer';
import LoginContainer from './UserAuth/LoginContainer';
import Hello from './Hello';
import App from './App';
import './index.css';

//all our website routes. all of these urls point towards our containers.

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}>
//routes can have child routes that display more stuff with the parent route (below it or whatever). "hello" isn't active
        <Route path="hello" component={Hello}/>
      </Route>
      <Route path="/about" component={About} />
      <Route path="/blog" component={AllPostsContainer} />
      <Route path="/postapost" component={PostContainer} />
      <Route path="/viewablog/:blog_id" component={ShowPostContainer} />
      <Route path="/editpost/:blog_id" component={EditPostContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
    </Route>
  </Router>
), document.getElementById('root'));
