import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1><a href="#basil">BASIL</a></h1>
          <nav>
            <a href="#people">People</a>
            <a href="#project">Project</a>
            <a href="#news">News</a>
            <a href="#publications">Publications</a>
          </nav>
        </div>
      </header>
      <section className="hero">
        <img src="/학교사진.jpg" alt="Lab Building" className="hero-image"/>
        <div className="hero-text">
          <h2>Welcome to Bio-Medical System AI LAB (BASIL) at Seouletech University!</h2>
        </div>
      </section>
      <main>
        <section id="news" className="news">
          <h2>News</h2>
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