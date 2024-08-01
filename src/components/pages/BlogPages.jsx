import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchArticles } from '../../service/apiService'

import HeaderBlogLayouts from '../layouts/HeaderBlogLayouts';
import FooterLayouts from '../layouts/FooterLayouts';
import DropdownLayouts from '../layouts/DropdownLayouts';
import TagLayouts from '../layouts/TagLayouts';

const BlogPages = () => {
  const [articles, setArticles] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 20;
  const navigate = useNavigate();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles('apple', '2024-07-24', '2024-07-24');
        setArticles(data);
        setFilteredArticles(data);
        setAllArticles(data); 
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  useEffect(() => {
    const results = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(results);
  }, [searchTerm, articles]);

  if (loading) return <h1 className='semi-black'>Loading...</h1>;
  if (error) return <p className='black'>Error loading data: {error.message}</p>;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleReadMore = (index) => {
    navigate(`/blog/${index}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  return (
    <div>
      <HeaderBlogLayouts />
      <div className="blog-content">
        <div className="left">
          <ul>
            {currentArticles.map((article, index) => (
              <li key={index}>
                <img src={article.urlToImage || 'https://via.placeholder.com/150'} alt={article.title} />
                <h2 className='black'>{article.title}</h2>
                <p className='semi-black'>{article.description}</p>
                <button onClick={() => handleReadMore(index)}>READ MORE</button>
              </li>
            ))}
          </ul>
          <div className='bt'>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map(page => (
              <button
                key={page + 1}
                onClick={() => handlePageChange(page + 1)}
                className={currentPage === page + 1 ? 'active' : ''}
              >
                {page + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <br /><br />
          <hr />
          <h1>Rencet Post</h1>
          <ul>
            {allArticles.slice(indexOfFirstArticle, indexOfLastArticle).map((article, index) => ( // Menampilkan artikel yang tidak dipengaruhi pencarian
              <li key={index}>
                <img src='./tb.png' alt={article.title} />
                <h2 className='black'>{article.title}</h2>
                <p className='semi-black'>{article.description}</p>
                <button onClick={() => handleReadMore(index)}>READ MORE</button>
              </li>
            ))}
          </ul>
          <br /><hr /><br />
          <DropdownLayouts></DropdownLayouts>
          <br /><hr /><br />
          <TagLayouts></TagLayouts>
        </div>
      </div>
      <FooterLayouts />
    </div>
  );
};

export default BlogPages;
