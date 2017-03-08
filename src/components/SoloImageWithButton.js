import React from 'react';
import SearchGiphy from './SearchGiphy';
import App from './App';

class SoloImageWithButton extends React.Component {

  constructor() {
    super();
    this.addOurImage = this.addOurImage.bind(this);
    this.deleteOurImage = this.deleteOurImage.bind(this);
  }

  addOurImage() {
    this.props.addNewImage(this.props.img);
    this.props.removeOurImage(this.props.img);
  }

  deleteOurImage() {
    this.props.deleteImage(this.props.img);
  }

  

  render() {
    let ourButton = (
      <button onClick={this.addOurImage}
      type="submit" className="btn btn-primary">Add To My List</button>
    );

    let deleteButton = (
      <button onClick={this.deleteOurImage}
      type="submit" className="btn btn-danger">Delete This Image</button>
    );


    return(
      <div key={this.props.img.name}>
        <img src={this.props.img.url}></img>
        {this.props.noButton ? deleteButton : ourButton}
        <h3>{this.props.img.description}</h3>
      </div>
    );
  }
}

SoloImageWithButton.propTypes = {
  img: React.PropTypes.object,
  addNewImage: React.PropTypes.func,
  noButton: React.PropTypes.bool,
  removeOurImage: React.PropTypes.func,
  deleteImage: React.PropTypes.func


};

export default SoloImageWithButton;
