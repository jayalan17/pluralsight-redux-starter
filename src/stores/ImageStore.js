import { extendObservable } from 'mobx';

export default class ImageStore {
  constructor  () {
    extendObservable(this, {
      images: []
    });
    this.addNewImage = this.addNewImage.bind(this);
  }

  setImages(images) {
    this.images = images;
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
      let allImages = this.images;
      allImages.push(image);
      this.images = allImages;
    });

  }
}
