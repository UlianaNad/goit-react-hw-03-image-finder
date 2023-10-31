import React from 'react';
import { StyledImg, StyledLi } from './ImageGalleryItem.styled';

function ImageGalleryItem({id, webformatURL, largeImageURL, tags}) {
  return (
    <StyledLi key={id}>
      <StyledImg src={webformatURL} alt={tags} />
    </StyledLi>
  );
}

export default ImageGalleryItem;
