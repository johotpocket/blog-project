import React from 'react';
import EditForm from '../Views/EditForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

//our page for editing existing posts
var EditPostContainer = React.createClass({

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
      url: '/api/posts/' + this.props.params.blog_id,
      method: 'PUT',
      data: data,
    }).done(function(data){
      browserHistory.push('/blog')
      console.log(data, "success editing blogger?")
    })
  },

  componentWillMount: function(){
    this.loadPostFromServer();
  },

  loadPostFromServer: function() {
    var self = this;
    $.ajax({
      url: '/api/posts/' + this.props.params.blog_id,
      method: 'GET',
    }).done(function(data){
      self.setState({ title: data.title, content: data.content })
    })
  },


  render: function() {
    return (
      <div>
        { this.state.title && this.state.content ? <EditForm updateTitle={this.updateTitle}
                                                    updateContent={this.updateContent}
                                                    handleSubmit={this.handleSubmit}
                                                    title={this.state.title}
                                                    content={this.state.content}
                                                   /> : "loading?" }
      </div>
    )
  }
});

export default EditPostContainer;
