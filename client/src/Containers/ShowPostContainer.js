import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router';

var ShowPostContainer = React.createClass({
  getInitialState: function(){
    return{
      post: null
    }
  },
loadPostFromServer: function() {
  $.ajax({
    url: '/api/posts/' + this.props.params.blog_id,
    method: 'GET'
  }).done(function(data){
    console.log( data )
      this.setState({ post: data })
  }.bind(this))
},
componentWillMount: function() {
  this.loadPostFromServer();
},
render: function() {
  return (
    <div>
      <h1> { this.state.post ? this.state.post.title : "loading" } </h1>
      <p> { this.state.post ? this.state.post.content : "still loading" } </p>
      <Link to="/blog" activeClassName="active-nav-btn"> Return to Blog Archive </Link>
    </div>
  )
}
})

export default ShowPostContainer;
