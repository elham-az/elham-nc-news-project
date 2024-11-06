import React from 'react'
import useFetch from './hooks/useFetch'
import { useParams } from 'react-router-dom'

const ArticlePage = () => {
  const { id } = useParams();
  const { data: articleData, loading: articleLoading, error: articleError } = useFetch(`https://be-nc-news-93e4.onrender.com/api/articles/${id}`);
  const { data: commentsData, loading: commentsLoading, error: commentsError } = useFetch(`https://be-nc-news-93e4.onrender.com/api/articles/${id}/comments`);

  if (articleLoading || commentsLoading) {
    return <p>Loading...</p>
  }
  if (articleError || commentsError) {
    return <p>Error: {articleError.message || commentsError.message}</p>
  }

  let commentsContent
  if (commentsData.comments.length === 0) {
    commentsContent= <p>No comments yet. Be the first to comment!</p>   
  } else {
    commentsContent= commentsData.comments.map((comment) => (
      <div key={comment.comment_id} className="comment-card">
      <p>{comment.body}</p>
      <p><strong>By:</strong> {comment.author}</p>
      <p><strong>Posted:</strong> {new Date(comment.created_at).toLocaleDateString()}</p>
      </div>
    ))
}

  return (
    <div>
      <div className="single-article-card">
      <h2>{articleData.article.title}</h2>
      <img src={articleData.article.article_img_url} alt={articleData.article.title} className="article-image" />
      <p>{articleData.article.body}</p>
      <p><strong>Author:</strong> {articleData.article.author}</p>
      <p><strong>Votes:</strong> {articleData.article.votes}</p>
      <p><strong>Published:</strong> {new Date(articleData.article.created_at).toLocaleDateString()}</p>
      </div>
        <section className="comments-section">
        <h3>Comments</h3>
        {commentsContent}
        </section>
    </div>
  )
}

export default ArticlePage
