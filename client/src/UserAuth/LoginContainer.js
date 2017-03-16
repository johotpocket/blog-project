import React from 'react';
import $ from 'jquery';
import LoginForm from './LoginForm';
import { browserHistory } from 'react-router';

var LoginContainer = React.createClass({

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
      console.log(data, "data response from trying to log in")
     if (data._id) {
       browserHistory.push('/home')
     } else {
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
