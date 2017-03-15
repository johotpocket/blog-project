import React, { Component } from 'react';
import { Link } from 'react-router';

var PostCard = function(props) {
  return (
    <div>
      <Link to= { "/viewablog/" + props.id } > { props.title } </Link>
        <p> { props.content } </p>
    </div>
  )
};

export default PostCard
