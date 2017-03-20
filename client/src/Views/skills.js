import React, { Component } from 'react';
import '../App.css';

//our skills list on the home page
class Skills extends Component {
  render() {
    return (
      <div className="container my-container-skills">
        <div>
          <li> Web Developer </li>
          <li> Artist </li>
          <li> Computer Repair </li>
        </div>
      </div>
    );
  }
}

export default Skills;
