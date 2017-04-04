import React, {Component} from 'react';
import $ from 'jquery';
import PostList from '../Views/PostList';
import { Link } from 'react-router';

class AllPostsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: null
    }
    this.deletePost = this.deletePost.bind(this)
  }
  componentDidMount =() => this.loadPostsFromServer()

  loadPostsFromServer() {
    fetch('/api/posts')
      .then(blob => blob.json())
      .then(posts => this.setState({ posts }))
  }

  // loadPostsFromServer(){
  //   $.ajax({
  //     url: '/api/posts',
  //     method: 'GET'
  //   }).done(posts => this.setState({ posts }))
  //   }
    deletePost(id){
      $.ajax({
        url: 'api/posts/' + id,
        method: 'DELETE'
      }).done((data) => {
        this.loadPostsFromServer();
      })
    }
    render() {
       return (
         <div>
           <div className="container blog-container">
             <h1> Hello from AllPostsContainer, look at all these posts? </h1>
             <Link to="/postapost" activeClassName="active-nav-btn"> Post New Entry </Link>
           </div>
           <div>
             { this.state.posts ? <PostList posts={this.state.posts} deletePost={this.deletePost}/> : null }
           </div>
         </div>
       )
    }
}

//our main blog page, showing all the entries
// const AllPostsContainer = React.createClass({
//   getInitialState: function(){
//     return {
//       posts: null
//     }
//   },
//
//   loadPostsFromServer: function() {
//     $.ajax({
//       url: '/api/posts',
//       method: 'GET'
//     }).done(function(data){
//       this.setState({ posts: data })
//     }.bind(this))
//   },
//   deletePost: function(faqspwr) {
//     $.ajax({
//       url: 'api/posts/' + faqspwr,
//       method: 'DELETE'
//     }).done(function(data){
//       console.log(data, "success deleting the post!");
//       this.loadPostsFromServer();
//     }.bind(this))
//   },
//
//   componentWillMount: function(){
//     this.loadPostsFromServer();
//   },
//
//   render: function() {
//     return (
//       <div>
//         <div className="container blog-container">
//           <h1> Hello from AllPostsContainer, look at all these posts? </h1>
//           <Link to="/postapost" activeClassName="active-nav-btn"> Post New Entry </Link>
//         </div>
//         <div>
//           { this.state.posts ? <PostList posts={this.state.posts} deletePost={this.deletePost}/> : null }
//         </div>
//       </div>
//     )
//    }
// });

export default AllPostsContainer;
