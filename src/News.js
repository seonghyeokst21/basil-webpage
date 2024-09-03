import React from 'react';
import './News.css';

const News = () => {
  // Sample news data
  const newsData = [
    { title: "This is big news", description: "기사 머릿글" },
    { title: "This is big news", description: "기사 머릿글" },
    { title: "This is big news", description: "기사 머릿글" },
    { title: "This is big news", description: "기사 머릿글" },
  ];

  return (
    <div className="News">
      <h1>BASIL News</h1>
      {newsData.map((news, index) => (
        <div className="news-item" key={index}>
          <div className="news-image-placeholder"></div>
          <div className="news-content">
            <h2>Title: {news.title}</h2>
            <p>{news.description}</p>
          </div>
        </div>
      ))}
      <div className="pagination">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </div>
    </div>
  );
}

export default News;