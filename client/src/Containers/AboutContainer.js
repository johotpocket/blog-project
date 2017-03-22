import React, { Component } from 'react';
import '../App.css';

//our about page
class AboutContainer extends Component {
  render() {
    return (
      <div>
        <div className="about-title">
          <h2> This is the story of my life </h2>
        </div>
        <div>
          <img className="home-image" src="https://i.ytimg.com/vi/Jkom5Ajo0iQ/hqdefault.jpg" alt="presentation"></img>
        </div>
        <div className="container about-container">
          <p> My name is Alex Murray, and I drift endlessly through the void of the internet </p>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
