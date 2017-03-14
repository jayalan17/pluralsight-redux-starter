import React from 'react';
import ShowGifs from './ShowGifs';
import SearchGifs from './SearchGifs';
import SearchGiphy from './SearchGiphy';
import LoginPage from './LoginPage';
import NavLink from './NavLink';
import NewUser from './NewUser';
import { inject, observer } from 'mobx-react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {NavbarHeader, NavbarToggle, NavbarCollapse, NavbarBrand} from 'react-bootstrap/lib/NavbarHeader';
import { LinkContainer} from 'react-router-bootstrap';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadImagesFromServer();
  }

  loadImagesFromServer() {
    fetch('/api/giphys')
      .then(function(result) {return result.json();})
      .then(images => this.props.imageStore.setImages(images));
  }

  render() {
    return (
    <div>
      <div>
        <h1>Find Your Perfect Giphy</h1>
          <ul>
            <li><NavLink to="/LoginPage">Login Page</NavLink></li>
            <li><NavLink to="/NewUser">New User</NavLink></li>
          </ul>
        </div>
    </div>
    );
  }
}

App.propTypes = {
  imageStore: React.PropTypes.object,
  children: React.PropTypes.object};

export default inject("imageStore")(observer(App));
