import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RencetBlogLayouts = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'apple',
            from: '2024-07-26',
            to: '2024-07-26',
            sortBy: 'popularity',
            apiKey: 'b4f0182f44494f48b527e0b5b7d2cc3f'
          }
        });
        setArticles(response.data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  return (
    <div className="blog">
      <div className="container">
        <h2 className="black">OUR RECENT BLOG</h2>
        <p className="semi-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
        </p>
        <div className="card">
            {articles.slice(0, 3).map((article, index) => (
                <div className="content">
                    <img src={article.urlToImage || 'https://via.placeholder.com/150'} alt={article.title} />
                    <h3 className="black">{article.title}</h3>
                    <p className="semi-black">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">READ MORE</a>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RencetBlogLayouts;
