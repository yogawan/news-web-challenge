import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePages from './components/pages/HomePages';
import BlogPages from './components/pages/BlogPages';
import ShowBlogPages from './components/pages/ShowBlogPages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages></HomePages>
  },
  {
    path: '/blog',
    element: <BlogPages></BlogPages>
  },
  {
    path: '/blog/:index',
    element: <ShowBlogPages></ShowBlogPages>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);