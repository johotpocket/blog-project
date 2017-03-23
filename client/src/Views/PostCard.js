import React from 'react';
import { Link } from 'react-router';

//the layout for each blog post
var PostCard = function(props) {
  return (
    <div>
      <div className="blog-post-container">
        <Link to={ "/viewablog/" + props.id } > { props.title } </Link>
          <p> { props.content } </p>
          <button onClick={() => props.deletePost(props.id)} className="btn btn-danger">Delete</button>
          <Link to={"/editpost/" + props.id } className="btn btn-danger"> Edit Post </Link>
      </div>
      <div className="blog-post-container">

      </div>
    </div>
  )
};

export default PostCard
