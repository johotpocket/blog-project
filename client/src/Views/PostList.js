import React, { Component } from 'react';
import PostCard from '../PostCard';

var PostList = React.createClass({
  render: function(){
    var self = this
    var allPostCards = this.props.posts.map(function(item){
      return <PostCard title={item.title} content={item.content}
              id={item._id}
             />
    });
    return (
      <div>
        { allPostCards }
      </div>
    )
  }
});

export default PostList;
