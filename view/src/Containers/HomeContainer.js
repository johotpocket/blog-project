import React, { Component } from 'react';
import Skills from '../Views/skills';
import Experience from '../Views/experience';
import Contact from '../Views/contactInfo';

//our home page
class HomeContainer extends Component {
  state = {user: null}
  loadUserFromServer() {
    fetch('/api/get_user')
    .then(blob => blob.json())
    .then(user => {
      window.u = user
      if (user.local) {
        console.log(user)
      }
    })
  }
  componentDidMount =() => this.loadUserFromServer()
  render() {
    return (
      <div>
        <div className="home-box">
          <div className="home-title">
            <h2> Alexander Murray's Blog's Blog </h2>
          </div>
            {this.props.children}
        </div>
        <div className="home-box-children">
          <p> tinker </p>
          <p> thinker </p>
          <p> pie </p>
        </div>
        <div>
          <img className="home-image" src="http://i1.kym-cdn.com/entries/icons/facebook/000/016/729/large.jpg" alt="presentation"></img>
        </div>
        <div className="home-box">
          <h2> Wow Im the best </h2>
        </div>
        <div className="container history-group">
          <h4> Skills </h4>
          <h4> Experience </h4>
        </div>
        <div className="container history-group">
         < Skills />
         < Experience />
        </div>
        <div className="home-box">
          <h3> Contact Me! </h3>
        </div>
        <div className="contact-info">
          < Contact />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
