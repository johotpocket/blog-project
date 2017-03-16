import React from 'react';

var SignupForm = React.createClass ({
  render() {
    return (
      <div>
      <h2> Signup Form </h2>
        <form onSubmit={this.props.handleSubmit}>
        <div>
          <label>Enter your email</label>
          <input onChange={ (event) => this.props.updateEmail(event.target.value)}
          type="email" className="form-control" id="" placeholder="email"/>
          </div>
        <div>
          <label>Choose a Password</label>
          <input onChange={ (event) => this.props.updatePassword(event.target.value)}
          type="password" className="form-control" id="" placeholder="password"/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
});

export default SignupForm;
