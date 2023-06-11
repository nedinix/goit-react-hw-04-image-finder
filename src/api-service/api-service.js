import axios from 'axios';

const API_KEY = '35839995-5c49d25fb3199a064f9ba676b';

axios.defaults.baseURL = `https://pixabay.com/api/`;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
}

export const fetchImages = async (query, page, abortSignal) => {
  const options = {
    signal: abortSignal.signal,
  };

  const { data } = await axios.get(`?q=${query}&page${page}`, options);
  console.log(data);
  return data;
};
