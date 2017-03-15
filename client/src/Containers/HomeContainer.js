import React, { Component } from 'react';
import './App.css';
import Skills from '../skills';
import Experience from '../experience';
import Contact from '../contactInfo';

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
          <img className="home-image" src="https://www.watchcartoononline.io/thumbs/Adventure-Time-Season-6-Episode-40-Orgalorg.jpg"></img>
        </div>
        <div className="home-box">
          <h2> Wow Im the best </h2>
        </div>
        <div className="history-group">
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
