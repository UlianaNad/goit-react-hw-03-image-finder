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
    photos: [],
    page: 1,
    per_page: 12,
  };

  async componentDidMount() {
    try {
      const { hits } = await fetchPhotos({
        per_page: this.state.per_page,
        page: this.state.page,
      });
      this.setState({ photos: hits });
    } catch (error) {
      toast.error(error.message);
    }
  }

  handleLoadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, per_page } = this.state;
    if (prevState.page !== page) {
      try {
        const { hits } = await fetchPhotos({
          per_page: per_page,
          page: page,
        });
        console.log(hits);
        this.setState(prev => ({ photos: [...prev.photos, ...hits] }));
      } catch (error) {
        toast.error(error.message);
      }
    }
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        <Searchbar />
        <ImageGallery photos={photos} />
        <Button onClick={this.handleLoadMore}>Load more...</Button>
        <ToastContainer />
      </div>
    );
  }
}
