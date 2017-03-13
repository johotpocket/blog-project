import React, { Component } from 'react';
import './App.css';

class PostBlog extends Component {
  render() {
    return (
      <div>
        <div className="blog-box">
          <h2> Welcome to the BLOG POSTING ROOM </h2>
        </div>
        <div className="blog-box">
        <label>el blago</label>
          <textarea className="blog-box" cols="50" rows="10"></textarea>
        </div>
      </div>
    );
  }
}



export default PostBlog;
