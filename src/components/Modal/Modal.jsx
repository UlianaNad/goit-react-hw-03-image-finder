import React from 'react';
import { StyledModal, StyledOverlay } from './Modal.stayled';

function Modal({close, imgInfo}) {
  return (
    <StyledOverlay onClick={close}>
      <StyledModal >
        <img src={imgInfo.largeImageURL} alt={imgInfo.tags} width="800" />
      </StyledModal>
    </StyledOverlay>
  );
}

export default Modal;
