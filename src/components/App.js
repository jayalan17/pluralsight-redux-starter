import React from 'react';
import ShowGifs from './ShowGifs';
import SearchGifs from './SearchGifs';
import SearchGiphy from './SearchGiphy';
import LoginPage from './LoginPage';
import NavLink from './NavLink';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      images: []
    };
    this.addNewImage = this.addNewImage.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }

  componentDidMount() {
    this.loadImagesFromServer();
  }

  deleteImage(img) {
    let allImages=this.state.images.slice();
    allImages=allImages.filter(i => img._id !==i._id);
    this.setState({images: allImages});
    fetch(`/api/giphys/${img._id}`, {
       method: 'DELETE',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: img.name,
         url: img.url,
         description: img.description
      })
    });
  }

  addNewImage(img) {
    fetch('/api/giphys', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: img.name,
         url: img.url,
         description: img.description
      })
    })
    .then(function(result) {return result.json();})
    .then(image => {
      let allImages = this.state.images.slice();
      allImages.push(image);
      this.setState({images: allImages});
    });

  }

  loadImagesFromServer() {
    fetch('/api/giphys')
      .then(function(result) {return result.json();})
      .then(data => this.setState({
        images: data}));
  }


  render() {
    return (
      <div>
        <h1>Find Your Perfect Giphy</h1>
    <ul>
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/LoginPage">Login Page</NavLink></li>
          <li><NavLink to="/SearchGiphy">Search</NavLink></li>
          <li><NavLink to="/SearchGifs">Add New Gif</NavLink></li>

        </ul>
        <ShowGifs addNewImage={this.addNewImage}
        gifs={this.state.images} deleteImage={this.deleteImage} noButton/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object};

export default App;
