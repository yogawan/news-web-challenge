import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import HeaderShowBlogLayouts from '../layouts/HeaderShowBlogLayouts';
import FooterLayouts from '../layouts/FooterLayouts';
import DropdownLayouts from '../layouts/DropdownLayouts';
import TagLayouts from '../layouts/TagLayouts';

const ShowBlogPages = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2024-07-24&to=2024-07-24&sortBy=popularity&apiKey=b4f0182f44494f48b527e0b5b7d2cc3f');
        setArticles(response.data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  const article = articles[index];

  if (!article) return <p>Article not found</p>;

  return (
    <div>
      <HeaderShowBlogLayouts text={article.title}></HeaderShowBlogLayouts>
      <div className='showblog'>
        <div className="left">
          <img src={article.urlToImage} alt="img" />
          <div className="list">
            <p className='black'>{article.publishedAt}</p>
            <p className='black'>{article.author}</p>
          </div>
          <p className='black'>{article.description}</p>
          <p className='black'>{article.content}</p>
          <button onClick={() => navigate('/blog')}>Back</button>
        </div>
        <div className="right">
          <br /><hr /><br />
          <DropdownLayouts></DropdownLayouts>
          <br /><hr /><br />
          <TagLayouts></TagLayouts>
        </div>
      </div>
      <FooterLayouts></FooterLayouts>
    </div>
  );
};

export default ShowBlogPages;
