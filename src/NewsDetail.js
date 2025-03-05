import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './NewsDetail.css';

function NewsDetail() {
  const { id } = useParams(); // URL에서 뉴스 ID를 가져옴
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    fetch('/data/news.json')
      .then(response => response.json())
      .then(data => setNewsItem(data[id]))
      .catch(error => console.error('Error fetching news data:', error));
  }, [id]);

  if (!newsItem) return <p className="loading">Loading...</p>;

  return (
    <div className="news-detail-container">
      <Link to="/news" className="back-link">← Back to News</Link>
      <div className="news-detail-header">
        <h2 className="news-detail-title">{newsItem.title}</h2>
        <img src={newsItem.image} alt={newsItem.title} className="news-detail-image" />
      </div>
      <p className="news-detail-summary"><strong></strong> {newsItem.summary}</p>
      <div className="news-detail-content">
        {newsItem.content.map((paragraph, index) => (
          <p key={index} className="news-detail-paragraph">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default NewsDetail;
