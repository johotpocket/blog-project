import React, {Component} from 'react';
import $ from 'jquery';
import LoginForm from './LoginForm';
import { browserHistory } from 'react-router';

class LoginContainer extends Component{

//the container for the login page
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
      url: '/api/login',
      method: 'POST',
      data: data
    }).done((data) => {
     if (data._id) {
       console.log(data, "log in successful")
       browserHistory.push('/home')
     } else {
       console.log(data, "log in failure")
       alert(data.message)
       browserHistory.push('/login')
     }
    })
  }

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
};

export default LoginContainer;
