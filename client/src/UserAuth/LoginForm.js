import React from 'react';

//the client form for the login page
var LoginForm = React.createClass({
  render() {
    return (
      <div>
        <h2> Login Form </h2>
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <label> Email </label>
              <input onChange={ (event) => this.props.updateEmail(event.target.value)}
              type="email" className="form-control" id="" placeholder="enter email here"/>
            </div>
            <div>
              <label> Password </label>
              <input onChange={ (event) => this.props.updatePassword(event.target.value)}
              type="password" className="form-control" id="" placeholder="enter password here"/>
            </div>
            <button type="submit" className="btn btn-default">Log In</button>
          </form>
      </div>
    )
  }
});

export default LoginForm;
