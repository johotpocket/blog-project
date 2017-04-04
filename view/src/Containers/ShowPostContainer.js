import React, {Component} from 'react';
import { Link } from 'react-router';
import ReactMarkdown from 'react-markdown';

//our single blog post view, with a return to main blog page button
class ShowPostContainer extends Component{
  state = {
      post: null
  }
  loadPostFromServer() {
    fetch(`/api/posts/${this.props.params.blog_id}`)
      .then(blob => blob.json())
      .then(post => this.setState({ post }))
  }
  componentWillMount() {
    this.loadPostFromServer();
  }
  render() {
    return (
        <div>
          <h1> { this.state.post ? this.state.post.title : "loading" } </h1>
          <ReactMarkdown source={ this.state.post ? this.state.post.content : "still loading" } />
          <Link to="/blog" activeClassName="active-nav-btn"> Return to Blog Archive </Link>
        </div>
    )
  }
}

export default ShowPostContainer;
