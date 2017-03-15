import React from 'react';
import $ from 'jquery';
import PostList from '../Views/PostList';
import { Link } from 'react-router';

var AllPostsContainer = React.createClass({
  getInitialState: function(){
    return {
      posts: null
    }
  },

  loadPostsFromServer: function() {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done(function(data){
      this.setState({ posts: data })
    }.bind(this))
  },
  deletePost: function(faqspwr) {
    $.ajax({
      url: 'api/posts/' + faqspwr,
      method: 'DELETE'
    }).done(function(data){
      console.log(data, "success deleting the post!");
      this.loadPostsFromServer();
    }.bind(this))
  },

  componentWillMount: function(){
    this.loadPostsFromServer();
  },

  render: function() {
    return (
      <div>
        <div>
          <h1> Hello from AllPostsContainer, look at all these posts? </h1>
          { this.state.posts ? <PostList posts={this.state.posts} deletePost={this.deletePost}/> : null }
        </div>
        <div>
          <Link to="/postapost" activeClassName="active-nav-btn"> Post New Entry </Link>
        </div>
      </div>
    )
   }
});

export default AllPostsContainer;
