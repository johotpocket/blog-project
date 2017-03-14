import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';
import Home from './HomeContainer';
import Blog from './BlogContainer';
import About from './AboutContainer';
import PostContainer from './PostContainer';
import Hello from './Hello';
import App from './App';
import './index.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}>
//routes can have child routes that display more stuff with the parent route (below it or whatever)
        <Route path="hello" component={Hello}/>
      </Route>
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/postablog" component={PostContainer} />
    </Route>
  </Router>
), document.getElementById('root'));
