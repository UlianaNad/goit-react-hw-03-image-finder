import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchPhotos, fetchPhotosByQuery } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    loading: false,
    error: null,
    photos: [],
    page: 1,
    per_page: 12,
    q:'',
    isOpen: false,
    imgInfo:null
  };

  async componentDidMount() {
    const { page, per_page } = this.state;
    this.getPhotos({ page, per_page , fn: fetchPhotos})
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, per_page, query } = this.state;
    if (!query && prevState.page !== page) {
      this.getPhotos({ page, per_page , fn: fetchPhotos})
    }
    if(query && (query !== prevState.query || page !== prevState.page)){
      this.getPhotos({page, per_page, q:query, fn: fetchPhotosByQuery})
    }
  }

  getPhotos = async({ page, per_page , q,  fn})=>{
    try {
      const { hits } = await fn({
        q:q,
        per_page: per_page,
        page: page,
      });
      this.setState(prev => ({ photos: [...prev.photos, ...hits] }));
    } catch (error) {
      toast.error(error.message);
    }
  }

  handleQuery = (query) => {
    this.setState({query, photos:[], page:1})
  }

  toggleModal = (imgInfo) => {
    this.setState(prev => ({isOpen: !prev.isOpen, imgInfo}))
  }

  handleLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  }

  handleClickOutside = ({target, currentTarget}) =>{
    if(target === currentTarget){
      this.toggleModal()
    }
  }
  render() {
    const { photos, query, isOpen , imgInfo} = this.state;

    return (
      <div>
        <Searchbar setQuery={this.handleQuery} />
        {query && <h2>You are looking for: {query}</h2>}
        <ImageGallery toggleModal={this.toggleModal} photos={photos} />
        <Button onClick={this.handleLoadMore}>Load more...</Button>
        {isOpen ? <Modal close={this.handleClickOutside} imgInfo={imgInfo}></Modal> : null}
        <ToastContainer />
      </div>
    );
  }
}
