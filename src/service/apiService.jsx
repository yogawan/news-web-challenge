import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = 'b4f0182f44494f48b527e0b5b7d2cc3f';

export const fetchArticles = async (query, fromDate, toDate) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        q: query,
        from: fromDate,
        to: toDate,
        sortBy: 'popularity',
        apiKey: API_KEY
      }
    });
    return response.data.articles;
  } catch (error) {
    throw new Error('Error fetching articles: ' + error.message);
  }
};