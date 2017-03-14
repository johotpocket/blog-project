import React, { Component } from 'react';
import BlogCard from './BlogCard';

var Bloglist = React.createClass({
  render: function(){
    var self = this
    var allBlogCards = this.props.posts.map(function(item){
      return <BlogCard title={item.title} content={item.content}
             />
    });
    return (
      <div>
      { allBlogCards }
      </div>
    )
  }
});

export default Bloglist;
