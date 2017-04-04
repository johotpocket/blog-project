import React, {Component} from 'react';
import SignupForm from './SignupForm';
import $ from 'jquery';
import {browserHistory} from 'react-router';

class SignupContainer extends Component{

//the container for the signup page
  state = {
    email: null,
    password: null
  }

  updateEmail(email) {
    this.setState({ email: email })
  }
  updatePassword(password) {
    this.setState({ password: password })
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    $.ajax({
      url: '/api/signup',
      method: 'POST',
      data: data,
    }).done((data) => {
      if (data._id) {
        console.log(data, "sign up successful")
        browserHistory.push('/home')
      } else {
        console.log(data, "sign up failure")
        alert(data.message)
        browserHistory.push('/signup')
      }


    })
  }
  render() {
    return (
      <div>
        < SignupForm updateEmail={this.updateEmail}
                     updatePassword={this.updatePassword}
                     handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
};

export default SignupContainer;
