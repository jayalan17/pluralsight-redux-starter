import React from 'react';
import ShowGifs from './ShowGifs';
import SoloImageWithButton from './SoloImageWithButton';
import App from './App';

class SearchGiphy extends React.Component {

  constructor() {
    super();
    this.state = {
      keyword: "",
      foundImages: []
    };
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeOurImage = this.removeOurImage.bind(this);
    this.addNewImage = this.addNewImage.bind(this);
  }

  removeOurImage(image) {
    const selectedImage = function(img) {
      return image.name !== img.name;
    };
    const filtered = this.state.foundImages.filter(selectedImage);
    this.setState({foundImages: filtered});
  }

  handleKeywordChange(e) {
    this.setState({keyword: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.keyword}&limit=3&api_key=dc6zaTOxFJmzC`)
      .then(function(result) {return result.json();})
      .then(data => this.setState({
        foundImages: this.convertToShowGifs(this.state.keyword, data.data)}));

  }

  convertToShowGifs(keyword, foundImages) {
    return foundImages.map(image => ({
      name: image.id,
      url: image.images.original.url,
      description: keyword + " " + image.slug
    }));
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
    });
    // .then(function(result) {return result.json();})
    // .then(image => {
    //   let allImages = this.state.images.slice();
    //   allImages.push(image);
    //   this.setState({images: allImages});
    // });

  }

  render() {
    return (
      <div>
      <form method="" role="form">
          <legend>Search Giphy for Images</legend>

          <div className="form-group">
            <input onChange={this.handleKeywordChange} value={this.state.keyword}
            type="text" className="form-control" id="keyword" placeholder="keyword"/>
          </div>

          <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>

      </form>
        <ShowGifs addNewImage={this.addNewImage}
        gifs={this.state.foundImages} removeOurImage={this.removeOurImage} noButton={false}/>

      </div>

    );
  }
}

SearchGiphy.propTypes = {
  addNewImage: React.PropTypes.func
};

export default SearchGiphy;
