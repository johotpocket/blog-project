import React from 'react';
import PostForm from '../Views/PostForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

//our "post new entry" page
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
    var data = {
      content: this.state.content,
      title: this.state.title
    };
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: data,
    }).done(function(data){
      browserHistory.push('/blog')
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
