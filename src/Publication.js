import React, { useEffect, useState } from 'react';
import './Publication.css';

const Publication = () => {
  const [publications, setPublications] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/api/all')
      .then((response) => response.json())
      .then((data) => {
        if (data.publications) {
          setPublications(data.publications);
        }
      })
      .catch((error) => console.error('Error fetching publications:', error));
  }, []);

  return (
    <div className="publication-contain">
      <section id="publications2" className="publications2">
        <h2>Publications</h2>
        <div className="publication-items">
          {publications.map((publication) => (
            <div className="publication-item" key={publication.id}>
              <div className="publication-content">
                <h3>{publication.title}</h3>
                <p><strong>Authors:</strong> {publication.authors}</p>
                <p><strong>Journal:</strong> {publication.journal}</p>
                <p><strong>Year:</strong> {publication.year}</p>
                {publication.url && publication.url !== "URL 없음" && (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                  >
                    Read more
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Publication;
