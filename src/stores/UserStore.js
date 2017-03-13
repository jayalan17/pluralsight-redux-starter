import { extendObservable } from 'mobx';
import {browserHistory} from 'react-router';

export default class UserStore {
  constructor  () {
    extendObservable(this, {
      name: "",
      password: "",
      admin: false,
      email: "",
      loginMsg: "",
      loggedInUser: false
    });
    this.LoginUser = this.LoginUser.bind(this);
  }

  LoginUser(name, password) {
    fetch('/api/authenticate', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: name,
         password: password
      })
    })
    .then(function(result) {
      console.log(result);
      return result.json();})
    .then(loginCred => {
      if (loginCred.success && loginCred.token){
        alert ('Login Successful!');
        browserHistory.push('/Main');
        this.loggedInUser=true;
        this.name=name;
      } else {
        alert (loginCred.message);
        this.loggedInUser=false;
        this.name="";
      }
    });
  }
}
