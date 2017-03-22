import React, { Component } from 'react';
import Skills from '../Views/skills';
import Experience from '../Views/experience';
import Contact from '../Views/contactInfo';

//our home page
class HomeContainer extends Component {
  render() {
    return (
      <div>
        <div className="home-box">
          <h2> Alexander Murray's Blog's Blog </h2>
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
          <h2> Skills </h2>
          <h2> Experience </h2>
        </div>
        <div className="container history-group">
         < Skills />
         < Experience />
        </div>
        <div className="home-box">
          <h2> Contact Me! </h2>
        </div>
        <div className="contact-info">
          < Contact />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
