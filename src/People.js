import React, { useEffect, useState } from 'react';
import './People.css';

function People() {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/all')
      .then(response => response.json())
      .then(data => {
        if (data.people) {
          setPeopleData(data.people);
        }
      })
      .catch(error => console.error('Error fetching people data:', error));
  }, []);

  if (!peopleData.length) return <p>Loading...</p>;

  return (
    <div className="people-container">
      <h2>People</h2>
      <div className="people-list">
        {peopleData.map((person) => (
          <div className="people-profile" key={person.id}>
            <img
              src={person.image}
              alt={person.name}
              className="people-profile-image"
            />
            <div className="people-profile-info">
              <h3>{person.name}</h3>
              <p><strong>Email:</strong> {person.email}</p>
              <p><strong>Introduce:</strong> {person.introduce}</p>
              <p><strong>Laboratory:</strong> {person.laboratory}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default People;
