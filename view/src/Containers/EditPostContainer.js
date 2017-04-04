import React, {Component} from 'react';
import EditForm from '../Views/EditForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

//our page for editing existing posts
class EditPostContainer extends Component{

    state = {
      content: null,
      title: null
    }

  handleSubmit = this.handleSubmit.bind(this)

  updateContent = (content) => this.setState({ content })
  updateTitle = (title) => this.setState({ title })

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      content: this.state.content,
      title: this.state.title
    };
    $.ajax({
      url: '/api/posts/' + this.props.params.blog_id,
      method: 'PUT',
      data: data,
    }).done((data) => browserHistory.push('/blog'))
  }

  loadPostFromServer() {
    fetch(`/api/posts/${this.props.params.blog_id}`)
      .then(blob => blob.json())
      .then(post => this.setState({ title: post.title, content: post.content  }))
  }
  componentWillMount() {
    this.loadPostFromServer();
  }

  //the old way:

  // loadPostFromServer() {
  //   var self = this;
  //   $.ajax({
  //     url: '/api/posts/' + this.props.params.blog_id,
  //     method: 'GET',
  //   }).done((data) =>{
  //     self.setState({ title: data.title, content: data.content })
  //   })
  // },


  render() {
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
};

export default EditPostContainer;
