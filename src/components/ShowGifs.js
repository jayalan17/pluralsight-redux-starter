import React from 'react';
import SoloImageWithButton from './SoloImageWithButton';
import { observer } from 'mobx-react';


ShowGifs.propTypes = {
  gifs: React.PropTypes.array,
  addNewImage: React.PropTypes.func,
  noButton: React.PropTypes.bool,
  removeOurImage: React.PropTypes.func,
  deleteImage: React.PropTypes.func
};

function deleteOurImage() {
  this.props.deleteImage(this.props.img);
  alert("hit button");
}

// this.deleteOurImage = this.deleteOurImage.bind(this);


function ShowGifs(props) {
  let images = props.gifs.map(function(img) {
    return (
      <SoloImageWithButton key={img.name} img={img}
        addNewImage={props.addNewImage} removeOurImage={props.removeOurImage} noButton={props.noButton} deleteImage={props.deleteImage}/>
    );
  });
  return (
    <div>
      {images}
    </div>
  );
}
export default observer(ShowGifs);
