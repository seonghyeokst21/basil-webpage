import React, { useEffect, useState } from 'react';
import './Publication.css';

const Publication = () => {
  const [PublicationItems, setPublicationItems] = useState([]);
  
  useEffect(() => {
    fetch('data/publication.json')
      .then((response) => response.json())
      .then((data) => setPublicationItems(data))
      .catch((error) => console.error('Error fetching publications:', error));
  }, []);

  return (
    <div className="publication-contain">
      <section id="publications2" className="publications2">
        <h2>Publications</h2>
        <div className="publication-items">
          {PublicationItems.map((publication, index) => (
            <div className="publication-item" key={index}>
              <div className="publication-content">
                <h3>{publication.title}</h3>
                <p><strong>Authors:</strong> {publication.authors}</p>
                <p><strong>Journal:</strong> {publication.journal}</p>
                <p><strong>Year:</strong> {publication.year}</p>
                {publication.url && (
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
