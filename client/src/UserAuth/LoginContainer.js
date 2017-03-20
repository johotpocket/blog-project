import React from 'react';
import $ from 'jquery';
import LoginForm from './LoginForm';
import { browserHistory } from 'react-router';

var LoginContainer = React.createClass({

//the container for the login page
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
      url: '/api/login',
      method: 'POST',
      data: data,
    }).done(function(data){
     if (data._id) {
       console.log(data, "log in successful")
       browserHistory.push('/home')
     } else {
       console.log(data, "log in failure")
       alert(data.message)
       browserHistory.push('/login')
     }
    })
  },

  render() {
    return (
      <div>
        < LoginForm updateEmail={this.updateEmail}
                    updatePassword={this.updatePassword}
                    handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
});

export default LoginContainer;
