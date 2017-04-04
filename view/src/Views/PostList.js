import React, {Component} from 'react';
import PostCard from './PostCard';

//the form for the main blog page ( for the client )
class PostList extends Component{
  render() {
    var allPostCards = this.props.posts.map((item, index) =>{
      return <PostCard key={index} title={item.title}
      deletePost={this.props.deletePost}
              id={item._id}
             />
    });
    return (
      <div>
        { allPostCards }
      </div>
    )
  }
};

export default PostList;
