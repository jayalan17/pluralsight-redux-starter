import React from 'react';
import ShowGifs from './ShowGifs';
import SearchGifs from './SearchGifs';
import SearchGiphy from './SearchGiphy';
import LoginPage from './LoginPage';
import NavLink from './NavLink';
import NewUser from './NewUser';
import { inject, observer } from 'mobx-react';


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
      <div>
        <ShowGifs addNewImage={this.props.imageStore.addNewImage}
        gifs={this.props.imageStore.images} deleteImage={this.props.imageStore.deleteImage} noButton/>
        {this.props.children}
      </div>
    </div>
    );
  }
}

App.propTypes = {
  imageStore: React.PropTypes.object,
  children: React.PropTypes.object};

export default inject("imageStore")(observer(App));
