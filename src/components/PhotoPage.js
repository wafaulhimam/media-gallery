import React from 'react';
import PropTypes from 'prop-types';

// First, we extract images, onHandleSelectImage, and selectedImage from 
// props using ES6 destructuring assignment and then render.
const PhotosPage = ({ images, onHandleSelectImage, selectedImage }) => (
  <div className="col-md-6">
    <h2> Images </h2>
    <div className="selected-image">
      <div key={selectedImage.id}>
        <h6>{selectedImage.title}</h6>
        <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
      </div>
    </div>
    <div className="image-thumbnail">
      {images.map((image, i) => (
        <div key={i} onClick={onHandleSelectImage.bind(this, image)}>
          <img src={image.mediaUrl} alt={image.title} />
        </div>
      ))}
    </div>
  </div>
);

// Define PropTypes
PhotosPage.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.object,
  onHandleSelectImage: PropTypes.func.isRequired
};

export default PhotosPage;