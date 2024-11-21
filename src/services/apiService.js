import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1';

export const fetchSearchResults = async (query, page = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        query,
        page
      }
    });
    return response.data;
  } catch (error) {
    console.error('Search failed', error);
    return { hits: [] };
  }
};
