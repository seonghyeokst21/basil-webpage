import './App.css';
import React, { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = () => {
            setIsNavOpen(!isNavOpen);
        };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        cssEase:'linear',
        className: 'sl'
        };
  return (
    <div className="App">
      <header className="App-header">
        <h1><a href="#home">BASIL</a></h1>
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
            <a href="#people" onClick={() => setIsNavOpen(false)}>People</a>
            <a href="#project" onClick={() => setIsNavOpen(false)}>Project</a>
            <a href="#news" onClick={() => setIsNavOpen(false)}>News</a>
            <a href="#publications" onClick={() => setIsNavOpen(false)}>Publications</a>
        </nav>
        <div className="hamburger" onClick={toggleNav}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
        </div>
      </header>
      
      <div className='slider'>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className='i1'>
            <h3>
            <img
              src="Herb Basil.png"
              width='100%'
              height='1000vh'
            />
            </h3>
          </div>
          <div>
            <h3>
            <img
             src="학교사진.jpg"
             width='100%'
             height='1000vh'
            />
            </h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
      <main>
        
      <section id = "home" className="hero">
      <h2>Welcome to Bio-Medical System AI LAB (BASIL) at Seouletech University!</h2>
        <div className="hero-text">
          
        </div>
      </section>
        <section id="news" className="news">
          <h2>News</h2>
          <div className="news-items">
            <div className="news-item">
              <h3>title 1</h3>
              <p>content: make news something you want</p>
            </div>
            <div className="news-item">
              <h3>title 1</h3>
              <p>content: make news something you want</p>
            </div>
            <div className="news-item">
              <h3>title 1</h3>
              <p>content: make news something you want</p>
            </div>
          </div>
        </section>




        <section id="people" className="people">
          <h2>People</h2>
          <div className="person">
            <h3>Name</h3>
            <p>name</p>
            <h3>Email</h3>
            <p>email</p>
            <h3>Introduce</h3>
            <p>introduce</p>
          </div>
        </section>





        <section id="publications" className="publications">
          <h2>Publications</h2>
          <p>K Choi, SH Kim, S Kim, “Self-Supervised Learning in Projection Domain for Low-Dose Cone-Beam CT”, Medical Physics, 2023</p>
          <p>K Choi, S Kim, J Lim, “Self-Supervised Inter- and Intra-Slice Correlation Learning for Low-Dose CT Image Restoration without Ground Truth”, Expert Systems with Applications, 2022</p>
          <p>SJ Choi, ES Kim, K Choi, “Prediction of the histology of colorectal neoplasm in white light colonoscopic images using deep learning algorithms”, Scientific Reports, 2021</p>
          <p>K Choi, S Kim, J Lim, “StatNet: Statistical Image Restoration for Low-Dose CT using Deep Learning”, IEEE Journal of Selected Topics in Signal Processing, 2020</p>
          <p>J Kwon, K Choi, “Trainable Multi-contrast Windowing for Liver CT Segmentation”, IEEE, 2020</p>
        </section>



        
      </main>
      <footer>
        <p>&copy; 2024 BASIL. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
