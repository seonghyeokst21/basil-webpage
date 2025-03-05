
import './News.css';
import { Link } from 'react-router-dom';
import React, {useEffect, useState } from 'react';
const News = () => {
  
  const [newsItems, setNewsItems] = useState([]); 
  useEffect(() => {
    fetch('data/news.json')
        .then((response) => response.json())
        .then((data) => setNewsItems(data))
        .catch((error) => console.error('Error fetching news:', error));
    }, []);

  return (
    <div className="news-contain">
      <section id="news" className="news-section">
        <h2>BASIL News</h2>
        <div className="news-items">
            {newsItems.map((news, index) => (
                <div className="news-item" key={index}>
                    <img src={news.image} alt={news.title} className="news-image" />
                    <div className="news-content">
                        <h3>{news.title}</h3>
                        <p><strong></strong> {news.summary}</p>
                        <p className="news-content-text">
                          {news.content.slice(0, 2).join(" ")}
                          {news.content.length > 2 && (
                            <span>... <Link to={`/news/${index}`} className="read-more">Read more</Link></span>
                          )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </div>    
  );
}

export default News;