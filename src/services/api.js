import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPhotos = async params => {
  const PARAMS = new URLSearchParams({
    key: '39829735-722e175b01b967c16f6acbd5c',
    // q: this.query,
    page: 1,
    per_page: 20,
    // safesearch: true,
    // orientation: 'horizontal',
    image_type: 'photo',
    lang: 'en',
    // lang: 'fi',
  });
  try {
    const { data } = await axios.get(`?${PARAMS}`);
    return data;
  } catch (error) {
    return error.message;
  }
};
