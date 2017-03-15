import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router';

class BlogContainer extends Component {
  render() {
    return (
      <div>
        <div className="blog-box">
          <h2> Welcome to the BLOG </h2>
          <Link to="/postablog" activeClassName="active-nav-btn"> Post New Entry </Link>
        </div>
        <div className="blog-box">

        </div>
      </div>
    );
  }
}

export default BlogContainer;
