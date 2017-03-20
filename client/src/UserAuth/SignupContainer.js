import React from 'react';
import SignupForm from './SignupForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

var SignupContainer = React.createClass({

//the container for the signup page
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
      if (data._id) {
        console.log(data, "sign up successful")
        browserHistory.push('/home')
      } else {
        console.log(data, "sign up failure")
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
