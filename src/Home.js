import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
function Home() {
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
              src="학교사진.jpg"
              style={{width:'100%' ,objectFit:'cover'}}
            />
            </h3>
          </div>
          <div>
            <h3>
            <img
             src="basil-image.jpg"
             style={{width:'100%' ,objectFit:'cover'}}
             //1280*720 image
            />
            </h3>
          </div>
          <div>
            <h3>
            <img
             src="CTimage.jpg"
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
            src="cloud-medicals.png"
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

export default Home;