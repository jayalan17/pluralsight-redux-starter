import React from 'react';

class EditGifs extends React.Component {
  constructor() {
    super();
    this.deleteOurImage = this.deleteOurImage.bind(this);
  }

  deleteOurImage() {
    this.props.deleteImage(this.props.img);
  }

  render() {
    let deleteButton = (
        <button onClick={this.deleteOurImage}
        type="submit" className="btn btn-danger">Delete This Image</button>
      );
    return(
      <div key={this.props.img.name}>
        <img src={this.props.img.url}></img>
        {this.props.noButton ? deleteButton}
        <h3>{this.props.img.description}</h3>
      </div>
    );
  }
  }

  EditGifs.propTypes = {
  img: React.PropTypes.object,
  addNewImage: React.PropTypes.func,
  noButton: React.PropTypes.bool,
  removeOurImage: React.PropTypes.func,
  deleteImage: React.PropTypes.func,
  userStore: React.PropTypes.object
  };












export default EditGifs;
