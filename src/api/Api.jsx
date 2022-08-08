import axios from 'axios';
import PropTypes from 'prop-types';

export const getFoto = (searchInput, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const options = new URLSearchParams({
    key: '28585306-e4853ffc00a22ab5f0bd1fbb4',
    q: searchInput,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: '12',
  });

  try {
    const response = axios.get(`${BASE_URL}?${options}`);
    if (response.data === {}) {
      throw new Error('error');
    }
    return response;
  } catch (error) {
    throw error;
  }
};

getFoto.propTypes = {
  searchInput: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
