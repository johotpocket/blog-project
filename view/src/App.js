import React, { Component } from 'react';
import Navbar from './Components/Navbar';

class App extends Component {
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
      <div className="container">
        { this.state.user ? <Navbar user={this.state.user} /> : null }
        { React.cloneElement(this.props.children, {
          user: this.state.user
        })}
      </div>
    );
  }
}

export default App;
