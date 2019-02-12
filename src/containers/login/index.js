import React from 'react';
import { login } from '../../../session';
import { getToken } from '../../api';
import LoginForm from '../../components/loginForm';

export default class Login extends React.Component {
  state = {
    userName: '',
    password: '',
  };

  changeUsername = ev => {
    this.setState({ userName: ev.target.value });
    //[e.target.name]: e.target.value
  };

  changePassword = ev => {
    this.setState({ password: ev.target.value });
  };

  submit = ev => {
    ev.preventDefault();
    const { userName, password } = this.state;

    getToken({ userName, password })
      .then(res => {
        console.log(res);
        login();
      })
      .catch(err => console.log(err));
    //isValidUser(this) ? login() : angryDeny();
  };

  render() {
    const { userName, password } = this.state;
    return (
      <div>
        Авторизация:
        <LoginForm
          userName={userName}
          password={password}
          changeUsername={this.changeUsername}
          changePassword={this.changePassword}
          submit={this.submit}
        />
        <a href="/products">К изобретениям</a>
      </div>
    );
  }
}
