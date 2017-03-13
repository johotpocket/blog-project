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
          <input
          type="text" className="form-control" id="" placeholder="start blogging, fool"/>
        </div>
      </div>
    );
  }
}

export default PostBlog;
