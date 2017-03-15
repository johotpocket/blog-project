import React, { Component } from 'react';
import PostForm from '../PostForm';
import $ from 'jquery';


var PostContainer = React.createClass({

  getInitialState: function() {
    return {
      content: null,
      title: null
    }
  },

  updateContent: function(content) {
    this.setState({ content: content })
  },
  updateTitle: function(title) {
    this.setState({ title: title})
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var self = this;
    var data = {
      content: this.state.content,
      title: this.state.title
    };
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: data,
    }).done(function(data){
      console.log(data, "success blogger?")
    })
  },


  render: function() {
    return (
      <div>
        < PostForm updateTitle={this.updateTitle}
                   updateContent={this.updateContent}
                   handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
});

export default PostContainer;