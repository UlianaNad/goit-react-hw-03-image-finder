import React from 'react';
import { StyledModal, StyledOverlay } from './Modal.stayled';

export default class Modal extends React.Component {

  async componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      this.props.close();
    }
  };
  handleKeyDown = ({key}) => {
    if(key === 'Escape'){
      this.props.close();
    }
  }
  render(){
    const { imgInfo} = this.props;
    return (
      <StyledOverlay onClick={this.handleClickOutside}>
        <StyledModal >
          <img src={imgInfo.largeImageURL} alt={imgInfo.tags} width="800" />
        </StyledModal>
      </StyledOverlay>
    );
  }
}

