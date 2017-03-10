import React from 'react';
import {browserHistory} from 'react-router';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      admin: false,
      email: "",
      loginMsg: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleAdminChange = this.handleAdminChange.bind(this);
    this.handleLoginUser = this.handleLoginUser.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleAdminChange(e) {
    this.setState({admin: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }

  handleLoginUser(event) {
    event.preventDefault();
    let user = {name: this.state.name, password: this.state.password};
    console.log(user);
    this.LoginUser(user);
    this.setState({name: "", password: ""});
  }

  LoginUser(usr) {
    fetch('/api/authenticate', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: usr.name,
         password: usr.password
      })
    })
    .then(function(result) {return result.json();})
    .then(loginCred => {
      console.log(loginCred);
      if (loginCred.success) {
        browserHistory.push('/Main');
      } else {
        this.setState({loginMsg: loginCred.message});
      }
    });
  }

  render() {
    return (
      <form method="" role="form">
          <legend>{this.state.loginMsg == "" ? "Please Log In": this.state.loginMsg}</legend>

          <div className="form-group">
            <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" id="username" placeholder="username"/>
          </div>

          <div className="form-group">
            <input onChange={this.handlePasswordChange} value={this.state.password}type="text" className="form-control" id="password" placeholder="password"/>
          </div>

          <button onClick={this.handleLoginUser} type="submit" className="btn btn-primary">Submit</button>
       </form>
    );
  }
  }

  LoginPage.propTypes = {
  LoginUser: React.PropTypes.func
  };

  export default LoginPage;
