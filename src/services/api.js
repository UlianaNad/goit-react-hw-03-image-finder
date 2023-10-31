import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPhotos = async params => {
  try {
    const { data } = await axios.get('', {
      params: {
        key: '39829735-722e175b01b967c16f6acbd5c',
        // q: this.query,
        page: 1,
        per_page: 12,
        ...params,
      },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
