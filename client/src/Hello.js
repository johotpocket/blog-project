import React, { Component } from 'react';
import './App.css';

//a test route child. it isn't active; to make it active, add it to HomeContainer's render.
class Hello extends Component {
  render() {
    return (
      <div>
        <h2> Welcome to Hello! </h2>
      </div>
    );
  }
}

export default Hello;
