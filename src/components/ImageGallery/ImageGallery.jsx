import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { StyledUl } from './ImageGallery.styled';

function ImageGallery({ photos = [] }) {
  return (
    <StyledUl>
      {photos.map(photo => (
        <ImageGalleryItem key={photo.id} {...photo} />
      ))}
    </StyledUl>
  );
}

export default ImageGallery;
