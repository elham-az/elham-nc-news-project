import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './hooks/useFetch'

const ArticlePage = () => {
  const { id } = useParams()
  const { data, loading, error } = useFetch(`https://be-nc-news-93e4.onrender.com/api/articles/${id}`)

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error: {error.message}</p>
  }
  if (!data) {
    return <p>Article not found</p>
  } 
  const article = data.article

  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title} className="article-image" />
      <p>{article.body}</p>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Votes:</strong> {article.votes}</p>
      <p><strong>Date:</strong> {new Date(article.created_at).toLocaleDateString()}</p>
      <p><strong>Comments:</strong> {article.comment_count}</p>
      <div className="comments-section">
      <h3>Comments:</h3>
    </div>
    </div>
  )
}

export default ArticlePage
