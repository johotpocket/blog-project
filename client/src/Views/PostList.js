import React from 'react';
import PostCard from './PostCard';

var PostList = React.createClass({
  render: function(){
    var self = this
    var allPostCards = this.props.posts.map(function(item, index){
      return <PostCard key={index} title={item.title} content={item.content}
      deletePost={self.props.deletePost}
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
