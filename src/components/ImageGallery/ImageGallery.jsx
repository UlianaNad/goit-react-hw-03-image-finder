import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { StyledUl } from './ImageGallery.styled';

function ImageGallery({ toggleModal, photos = [] }) {
  return (
    <StyledUl>
      {photos.map(photo => (
        <ImageGalleryItem toggleModal={toggleModal} key={photo.id} {...photo} />
      ))}
    </StyledUl>
  );
}

export default ImageGallery;
