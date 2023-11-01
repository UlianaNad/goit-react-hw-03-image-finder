import React from 'react';
import { StyledImg, StyledLi } from './ImageGalleryItem.styled';

function ImageGalleryItem({
  toggleModal,
  id,
  webformatURL,
  largeImageURL,
  tags,
}) {
  return (
    <StyledLi
      key={id}
      onClick={() => toggleModal({ id, largeImageURL, tags })
      }
    >
      <StyledImg src={webformatURL} alt={tags} />
    </StyledLi>
  );
}

export default ImageGalleryItem;
