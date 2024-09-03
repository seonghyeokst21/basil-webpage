import React from 'react';
import './People.css';

function People() {
  return (
    <div className="people-container">
      {/* Professor Section */}
      <section className="people-section professor">
        <h2 className="people-h2">Professor</h2>
        <div className="people-profile">
          <div className="people-profile-image" />
          <div className="people-profile-info">
            <h3>Name</h3>
            <p>name</p>
            <h3>Email</h3>
            <p>email</p>
            <h3>Introduce</h3>
            <p>introduce</p>
          </div>
        </div>
        <div className="people-education">
          <h4>Education</h4>
          <p>Seoul National University, Bachelor of Electrical Engineering (2004)</p>
          <p>Seoul National University, Master of Electrical and Computer Engineering (2006)</p>
          <p>Master of Electrical Engineering, Stanford University (2008)</p>
          <p>PhD in Electrical Engineering, Stanford University (2014)</p>
        </div>
        <div className="people-career">
          <h4>Career highlights</h4>
          <p>Professional researcher, Samsung Electronics Advanced Institute of Technology (2014.4-2017.2)</p>
          <p>Senior Researcher, Korea Institute of Science and Technology (2017.3-2023.8)</p>
          <p>Assistant Professor, Seoul National University of Science and Technology (2023.9-present)</p>
        </div>
        <div className="people-papers">
          <h4>Major papers and books</h4>
          <ol>
            <li>1. K Choi, SH Kim, S Kim, "Self-Supervised Learning in Projection Domain for Low-Dose Cone-Beam CT", Medical Physics, 2023</li>
            <li>2. K Choi, S Kim, J Lim, "Self-Supervised Inter- and Intra-Slice Correlation Learning for Low-Dose CT Image Restoration without Ground Truth", Expert Systems with Applications, 2022</li>
            <li>3. SJ Choi, ES Kim, K Choi, "Prediction of the histology of colorectal neoplasm in white light colonoscopic images using deep learning algorithms", Scientific Reports, 2021</li>
            <li>4. K Choi, S Kim, J Lim, "StatNet: Statistical Image Restoration for Low-Dose CT using Deep Learning", IEEE Journal of Selected Topics in Signal Processing, 2020</li>
          </ol>
        </div>
      </section>

      {/* Graduate Student Section */}
      <section className="people-section student">
        <h2 className="people-h2">Graduate student</h2>
        <div className="people-profile">
          <div className="people-profile-image" />
          <div className="people-profile-info">
            <h3>Name</h3>
            <p>name</p>
            <h3>Email</h3>
            <p>email</p>
            <h3>Introduce</h3>
            <p>introduce</p>
          </div>
        </div>
      </section>

      {/* Undergraduate Student Section */}
      <section className="people-section student">
        <h2 className="people-h2">Under graduate student</h2>
        <div className="people-profile">
          <div className="people-profile-image" />
          <div className="people-profile-info">
            <h3>Name</h3>
            <p>name</p>
            <h3>Email</h3>
            <p>email</p>
            <h3>Introduce</h3>
            <p>introduce</p>
          </div>
        </div>
        <div className="people-profile">
          <div className="people-profile-image" />
          <div className="people-profile-info">
            <h3>Name</h3>
            <p>name</p>
            <h3>Email</h3>
            <p>email</p>
            <h3>Introduce</h3>
            <p>introduce</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default People;
