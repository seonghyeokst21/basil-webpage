import React, { useEffect, useState } from 'react';
import './People.css';

function People() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('data/people.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching people data:', error));
  }, []);

  if (!data) return <p>Loading...</p>;

  const { professor, graduate_student_1, undergraduate_student_1, undergraduate_student_2 } = data;

  return (
    <div className="people-container">
      <section className="people-section professor">
        <h2 className="people-h2">Professor</h2>
        <div className="people-profile">
          <img src={professor.image} alt={professor.name} className="people-profile-image" />
          <div className="people-profile-info">
            <h3>Name</h3>
            <p>{professor.name}</p>
            <h3>Email</h3>
            <p>{professor.email}</p>
            <h3>Introduce</h3>
            <p>{professor.introduce}</p>
            <h3>TEL</h3>
            <p>{professor.TEL}</p>
            <h3>Laboratory</h3>
            <p>{professor.laboratory}</p>
          </div>
        </div>
        <div className="people-education">
          <h4>Education</h4>
          {professor.education.map((edu, index) => (
            <p key={index}>{edu.institution}, {edu.degree} ({edu.year})</p>
          ))}
        </div>
        <div className="people-career">
          <h4>Career Highlights</h4>
          {professor.career_highlights.map((career, index) => (
            <p key={index}>{career.position}, {career.organization} ({career.period})</p>
          ))}
        </div>
      </section>

      {/* Graduate Student Section */}
      <section className="people-section student">
        <h2 className="people-h2">Graduate Student</h2>
        <div className="people-profile">
          <img src={graduate_student_1.image} alt={graduate_student_1.name} className="people-profile-image" />
          <div className="people-profile-info">
            <h3>Name</h3>
            <p>{graduate_student_1.name}</p>
            <h3>Email</h3>
            <p>{graduate_student_1.email}</p>
            <h3>Introduce</h3>
            <p>{graduate_student_1.introduce}</p>
            <h3>Laboratory</h3>
            <p>{graduate_student_1.laboratory}</p>
          </div>
        </div>
      </section>

      {/* Undergraduate Student Section */}
      <section className="people-section student">
        <h2 className="people-h2">Undergraduate Students</h2>
        
        {/* Undergraduate Student 1 */}
        <div className="people-profile">
          <img src={undergraduate_student_1.image} alt={undergraduate_student_1.name} className="people-profile-image" />
          <div className="people-profile-info">
            <h3>Name</h3>
            <p>{undergraduate_student_1.name}</p>
            <h3>Email</h3>
            <p>{undergraduate_student_1.email}</p>
            <h3>Introduce</h3>
            <p>{undergraduate_student_1.introduce}</p>
            <h3>Laboratory</h3>
            <p>{undergraduate_student_1.laboratory}</p>
          </div>
        </div>
        
        {/* Undergraduate Student 2 */}
        <div className="people-profile">
          <img src={undergraduate_student_2.image} alt={undergraduate_student_2.name} className="people-profile-image" />
          <div className="people-profile-info">
            <h3>Name</h3>
            <p>{undergraduate_student_2.name}</p>
            <h3>Email</h3>
            <p>{undergraduate_student_2.email}</p>
            <h3>Introduce</h3>
            <p>{undergraduate_student_2.introduce}</p>
            <h3>Laboratory</h3>
            <p>{undergraduate_student_2.laboratory}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default People;
