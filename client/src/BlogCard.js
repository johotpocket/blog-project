import React, { Component } from 'react';

var BlogCard = function(props) {
  return (
    <div>
      <h4> { props.title } </h4>
        <p> { props.content } </p>
    </div>
  )
};

export default BlogCard
