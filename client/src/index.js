import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Home from './Containers/HomeContainer';
import AllPostsContainer from './Containers/AllPostsContainer';
import About from './Containers/AboutContainer';
import PostContainer from './Containers/PostContainer';
import ShowPostContainer from './Containers/ShowPostContainer'
import Hello from './Hello';
import App from './App';
import './index.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}>
//routes can have child routes that display more stuff with the parent route (below it or whatever)
        <Route path="hello" component={Hello}/>
      </Route>
      <Route path="/about" component={About} />
      <Route path="/blog" component={AllPostsContainer} />
      <Route path="/postapost" component={PostContainer} />
      <Route path="/viewablog/:blog_id" component={ShowPostContainer} />
    </Route>
  </Router>
), document.getElementById('root'));
