import React, { Component } from 'react';
import '../App.css';

//our experience list on the home page
class Experience extends Component {
  render() {
    return (
      <div className="container my-container-experience">
        <div>
          <li> Microsoft - Corporate Sabotage </li>
          <li> Google - website analyst </li>
          <li> Apple - Sweat Shop Worker </li>
          </div>
      </div>
    );
  }
}

export default Experience;
