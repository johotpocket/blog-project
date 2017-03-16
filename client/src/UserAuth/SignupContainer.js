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
  updateEmail: function(email) {
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
        console.log(data, "data response from trying to sign up")
      if (data._id) {
        browserHistory.push('/home')
      } else {
        alert(data.message)
        browserHistory.push('/signup')
      }


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
