import React from 'react';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      admin: false,
      email: ""
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
    this.LoginUser(this.state);

  }

  LoginUser(usr) {
    fetch('/api/user', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: usr.name,
         password: usr.password,
         email: usr.email
      })
    });
    // .then(function(result) {return result.json();})
    // .then(image => {
    //   let allImages = this.state.images.slice();
    //   allImages.push(image);
    //   this.setState({images: allImages});
    // });
    alert('Successfully Logged In');
  }


  render() {
    return (
      <form method="" role="form">
          <legend>Please Log In</legend>

          <div className="form-group">
            <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" id="username" placeholder="username"/>
          </div>

          <div className="form-group">
            <input onChange={this.handlePasswordChange} value={this.state.password}type="text" className="form-control" id="password" placeholder="password"/>
          </div>

          <div className="form-group">
            <p> If new user please enter email </p>
            <input onChange={this.handleEmailChange} value={this.state.email}type="text" className="form-control" id="email" placeholder="email"/>

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
