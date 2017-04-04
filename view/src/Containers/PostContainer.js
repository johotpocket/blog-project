import React, {Component} from 'react';
import PostForm from '../Views/PostForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

//our "post new entry" page
class PostContainer extends Component {

  state = {
    title: null,
    content: null
  }

  updateTitle = this.updateTitle.bind(this)
  handleSubmit = this.handleSubmit.bind(this)

  updateContent = (content) => this.setState({ content })

  updateTitle(title) {
    this.setState({ title: title})
  }


  handleSubmit(e) {
    e.preventDefault();
    const data = {
      content: this.state.content,
      title: this.state.title
    };
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: data,
    }).done((data) =>{
      browserHistory.push('/blog')
      console.log(data, "success blogger?")
    })
  }


  render() {
    return (
      <div>
        < PostForm updateTitle={this.updateTitle}
                   updateContent={this.updateContent}
                   handleSubmit={this.handleSubmit}
                   previewContent={this.state.content ? this.state.content : "no content yo"}
        />
      </div>
    )
  }
};

export default PostContainer;
