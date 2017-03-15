import React, { Component } from 'react';
import $ from 'jquery';
import PostList from '../PostList';
import { Link } from 'react-router';

var AllPostsContainer = React.createClass({
  getInitialState: function(){
    return {
      posts: null
    }
  },

  LoadPostsFromServer: function() {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done(function(data){
      this.setState({ posts: data })
    }.bind(this))
  },

  componentWillMount: function(){
    this.LoadPostsFromServer();
  },

  render: function() {
    return (
      <div>
        <h1> Hello from AllPostsContainer, look at all these posts? </h1>
        { this.state.posts ? <PostList posts={this.state.posts}/> : null }
        <Link to="/postapost" activeClassName="active-nav-btn"> Post New Entry </Link>
      </div>
    )
   }
});

export default AllPostsContainer;
