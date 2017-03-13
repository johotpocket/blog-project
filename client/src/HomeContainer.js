import React, { Component } from 'react';
import './App.css';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <div className="home-box">
          <h2> This is the hella hype hwebsite home! </h2>
            {this.props.children}
        </div>
        <div className="home-box">
          <p> We have lots of great things here: </p>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
