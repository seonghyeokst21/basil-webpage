import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './People.css';

function People() {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/all');
        if (response.data.people) {
          setPeopleData(response.data.people);
        }
      } catch (error) {
        console.error('🚨 Error fetching people data:', error);
      }
    };

    fetchPeople();
  }, []);

  // 🔹 Professor 직책만 Notion 본문 불러오기
  useEffect(() => {
    const loadProfessorContent = async () => {
      const updatedPeopleData = await Promise.all(
        peopleData.map(async (person) => {
          if (person.position === "Professor") {  // 🔹 직책이 Professor이면 본문 가져오기
            return {
              ...person,
              content: await fetchPersonContent(person.id),
            };
          }
          return person; // 다른 직책은 변경 없이 반환
        })
      );
      setPeopleData(updatedPeopleData);
    };

    if (peopleData.length > 0) {
      loadProfessorContent();
    }
  }, [peopleData.length]);

  // 🔹 개별 Professor 본문 데이터 가져오는 함수
  const fetchPersonContent = async (personId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/people/content/${personId}`);
      return response.data.content;
    } catch (error) {
      console.error('🚨 Error fetching person content:', error);
      return "내용을 불러오는 데 실패했습니다.";
    }
  };

  if (!peopleData.length) return <p>Loading...</p>;

  // 🔹 직책별로 그룹화
  const groupedByPosition = peopleData.reduce((acc, person) => {
    const position = person.position || "직책 없음"; // 🔹 직책이 없으면 기본값 설정
    if (!acc[position]) {
      acc[position] = [];
    }
    acc[position].push(person);
    return acc;
  }, {});

  return (
    <div className="people-container">
  <h2>People</h2>
  <div className="people-section">
    {Object.entries(groupedByPosition).map(([position, people]) => (
      <div key={position} className="position-group">
        <h3 className="position-title">{position}</h3>
        <div className="people-list">
          {people.map((person) => (
            <div className="people-profile" key={person.id}>
              <div className="people-main-info">
                <img src={person.image} alt={person.name} className="people-profile-image" />
                <div className="people-profile-info">
                  <h3>{person.name}</h3>
                  <p><strong>Email:</strong> {person.email}</p>
                  <p><strong>Introduce:</strong> {person.introduce}</p>
                  <p><strong>Laboratory:</strong> {person.laboratory}</p>
                </div>
              </div>

              {person.position === "Professor" && (
                <div className="notion-content">
                  <div dangerouslySetInnerHTML={{ __html: person.content || "불러오는 중..." }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default People;
