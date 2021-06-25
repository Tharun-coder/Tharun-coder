import React from "react";
import Author from "../images/me.jpg";

function AboutMe(props) {
  return (
    <div className="container py-5 aboutme-container" id="about">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="photo-wrap mb-5">
            <img src={Author} alt="Author" className="profile-img" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <h1 className="about-header">About Me</h1>
          <ul>
            <li className="content">
              Certified Full Stack Developer with quite few own projects looking
              for an opportunity to work and excel my skills in an organization
              and interested to explore and work on complex projects.
            </li>
            <li className="content">
              Proven skills in completing black, white and grey box tests.
              Background writing and implementing test cases, developing testing
              plans and identifying use cases. Fully versed in complete STLC.
            </li>
            <li className="content">
              Experienced Software Engineer with over 2 years of experience in
              Software Industry. Excellent reputation for resolving problems,
              improving customer satisfaction, and driving overall operational
              improvements.
            </li>
          </ul>
          <h1 className="about-header">Objective</h1>
          <p className="content">
            To secure a challenging role in a reputable organization to utilize
            my technical and management skills for the growth of the
            organization as well as to enhance my knowledge about new and
            emerging trends in IT sector.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
