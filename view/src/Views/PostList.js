import React from 'react';
import PostCard from './PostCard';

//the form for the main blog page ( for the client )
var PostList = React.createClass({
  render: function(){
    var self = this
    var allPostCards = this.props.posts.map(function(item, index){
      return <PostCard key={index} title={item.title}
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
