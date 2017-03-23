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
          <img className="about-image" src="https://static.wixstatic.com/media/c3092f_63c9532e914a4af68b887234e20d0c34.gif" alt="presentation"></img>
        </div>
        <div className="container about-container">
          <p> My name is Alex Murray, and I drift endlessly through the void of the internet </p>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
