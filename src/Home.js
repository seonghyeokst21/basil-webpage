import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import React, {useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';


function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [newsItems, setNewsItems] = useState([]); 
    const [peopleItems, setPeopleItems] = useState([]);
    const [ProjectItems, setProjectItems] = useState([]);
    const [PublicationItems, setPublicationItems] = useState([]);

    const toggleNav = () => {
            setIsNavOpen(!isNavOpen);
        };

    useEffect(() => {
        fetch('data/news.json')
            .then((response) => response.json())
            .then((data) => setNewsItems(data))
            .catch((error) => console.error('Error fetching news:', error));
        fetch('data/people.json')
            .then((response) => response.json())
            .then((data) => {
                const peopleArray = Object.values(data);
                setPeopleItems(peopleArray);
            })
            .catch((error) => console.error('Error fetching people:', error));
        fetch('data/project.json')
            .then((response) => response.json())
            .then((data) => setProjectItems(data))
            .catch((error) => console.error('Error fetching news:', error));
        fetch('data/publication.json')
            .then((response) => response.json())
            .then((data) => setPublicationItems(data))
            .catch((error) => console.error('Error fetching news:', error));
        
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase:'linear',
        className: 'sl',
        width:'100%'
        };
  return (
    <div className="Home">
      <div className='slider'>
        <Slider {...settings}>
          <div className='i1'>
            <h3>
            <img
              src="images/home/학교사진.jpg"
              style={{width:'100%' ,objectFit:'cover'}}
            />
            </h3>
          </div>
          <div>
            <h3>
            <img
             src="images/home/basil-image.jpg"
             style={{width:'100%' ,objectFit:'cover'}}
             //1280*720 image
            />
            </h3>
          </div>
          <div>
            <h3>
            <img
             src="images/home/CTimage.jpg"
             style={{width:'100%' ,objectFit:'cover'}}
             //1280*720 image
            />
            </h3>
          </div>

        </Slider>
      </div>
      <main>
      <section id="home" className="hero" style={{ display: 'flex', alignItems: 'center' }}>    
          <img
            src="images/home/cloud-medicals.png"
            style={{ width: '30%', objectFit: 'cover', paddingLeft: '20px' }}
            alt="Medical Cloud"
          />
          <div className="hero-text" style={{ flex: 1, color: 'lightgreen', backgroundColor: 'white', padding: '10px' }}>
            <h2>Welcome to Bio-Medical System AI LAB (BASIL) at Seouletech University!</h2>
          </div>
        </section>
        <section id="news" className="news" >
          <h2>News</h2>
          <div className="news-items">
            {newsItems.map((news, index) => (
              <div className="news-item" key={index}>
                <img src={news.image} alt={news.title} className="news-image" />
                  <div className="news-content">
                    <h3>{news.title}</h3>
                    <p>{news.summary}</p>
                  </div>
              </div>
            ))}
          </div>
        </section>

        <section id="people" className="people" >
          <h2>People</h2>
          <div className="people-items">
            {peopleItems.map((people, index) => (
              <div className="people-item" key={index}>
                <img src={people.image} alt={people.title} className="people-image" />
                  <div className="people-content">
                    <h3>{people.name}</h3>
                    <p>{people.email}</p>
                    <p>{people.introduce}</p>
                  </div>
              </div>
            ))}
          </div>
        </section>

        <section className="publications">
            <h2>Publications</h2>
            <div className="publication-items">
                {PublicationItems.map((publication, index) => (
                    <div className="publication-item" key={index}>
                        <div className="publication-content">
                            <h3>{publication.title}</h3>
                            <p><strong>Authors:</strong> {publication.authors}</p>
                            <p><strong>Journal:</strong> {publication.journal}</p>
                            <p><strong>Year:</strong> {publication.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-items">
                {ProjectItems.map((project, index) => (
                    <div className="project-item" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.content}</p>
                    </div>
                ))}
            </div>
        </section>
        
      </main>
      <footer>
        <p>&copy; 2024 BASIL. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;