import React from 'react';
import SignupForm from './SignupForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

var SignupContainer = React.createClass({

  getInitialState: function() {
    return {
      email: null,
      password: null
    }
  },
  updateUsername: function(email) {
    this.setState({ email: email })
  },
  updatePassword: function(password) {
    this.setState({ password: password })
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var data = {
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url: '/api/signup',
      method: 'POST',
      data: data,
    }).done(function(data){
      browserHistory.push('/home')
      console.log(data, "you signed up, hooray")
    })
  },
  render: function() {
    return (
      <div>
        < SignupForm updateEmail={this.updateEmail}
                     updatePassword={this.updatePassword}
                     handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
});

export default SignupContainer;
