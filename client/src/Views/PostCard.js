import React from 'react';
import { Link } from 'react-router';

var PostCard = function(props) {
  return (
    <div>
      <Link to={ "/viewablog/" + props.id } > { props.title } </Link>
        <p> { props.content } </p>
        <button onClick={() => props.deletePost(props.id)} className="btn btn-alarm">Delete</button>
    </div>
  )
};

export default PostCard
