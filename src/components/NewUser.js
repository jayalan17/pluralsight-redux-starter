import React from 'react';

class NewUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      email: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handleNewUser(event) {
    // event.preventDefault();
    this.NewUser(this.state);
  }

  NewUser(usr) {
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
  }


  render() {
    return (
      <form method="" role="form">
          <legend>Please Register</legend>

          <div className="form-group">
            <input onChange={this.handleNameChange} value={this.state.name} type="text" className="form-control" id="username" placeholder="username"/>
          </div>

          <div className="form-group">
            <input onChange={this.handlePasswordChange} value={this.state.password}type="text" className="form-control" id="password" placeholder="password"/>
          </div>

          <div className="form-group">
            <input onChange={this.handleEmailChange} value={this.state.email}type="text" className="form-control" id="email" placeholder="email"/>
          </div>

          <button onClick={this.handleNewUser} type="submit" className="btn btn-primary">Submit</button>
       </form>
    );
  }
  }

  NewUser.propTypes = {
  NewUser: React.PropTypes.func
  };

  export default NewUser;
