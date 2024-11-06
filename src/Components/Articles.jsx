import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch'
import { Link } from "react-router-dom"
import '../App.css'

const Articles = () => {
  const { data, loading, error } = useFetch('https://be-nc-news-93e4.onrender.com/api/articles')

  if (loading) {
    return <p>Loading articles...</p>
  }

  if (error) {
    return <p>Error loading articles: {error.message}</p>
  }
  
  return (
    <div className="articles-list">
      {data.articles.map((article) => (
        <Link to={`/articles/${article.article_id}`} key={article.article_id} className="article-card-link">
        <div className="article-card">
            <h3>{article.title}</h3>
            <img src={article.article_img_url}  className="article-image" />
            <p><strong>Author:</strong> {article.author}</p>
            <p><strong>Votes:</strong> {article.votes}</p>
            <p><strong>Date:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
            <p><strong>Comments:</strong> {article.comment_count}</p>
        </div>
        </Link>
      ))}
    </div>
  )

}

export default Articles
