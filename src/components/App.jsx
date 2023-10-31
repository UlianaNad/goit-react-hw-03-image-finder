import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchPhotos } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    loading: false,
    error: null,
    posts: [],
  };

  async componentDidMount() {
    try {
      const {hits, totalHits, total} = await fetchPhotos();
      console.log(hits, total, totalHits);
      this.setState({photos: hits})

    } catch (error) {
      toast.error(error.message)
    }
  }

  render() {
    const {photos} = this.state;
    return (
      <div>
        <Searchbar />
        <ImageGallery photos = {photos} />
        <Button />
        <ToastContainer />
      </div>
      
    );
  }
}
