import React, { Component } from 'react';
import $ from 'jquery';
import BlogList from './BlogList';

var AllBlogsContainer = React.createClass({
  getInitialState: function(){
    return {
      posts: null
    }
  },
LoadBlogsFromServer: function() {
  $.ajax({
    url: '/api/posts',
    method: 'GET'
  }).done(function(data){
    this.setState({ posts: data })
  }.bind(this))
},
componentWillMount: function(){
  this.LoadBlogsFromServer();
},
render: function() {
  return (
    <div>
      <h1> Hello from AllBlogsContainer, look at all these blogs? </h1>
      { this.state.posts ? < BlogList posts={this.state.posts}/> : null }
    </div>
  )
 }
});

export default AllBlogsContainer;
