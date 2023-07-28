import React from "react";

function Skills(props) {
  return (
    <div className="container skills-wrapper" id="skills">
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <h1 className="skills-header">Skills</h1>
        </div>
        <div className="row skills-content">
          <div className="col-lg-3 col-sm-12">
            <div className="skills">
              <ul>
                <li>HTML/CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="skills-center">
              <ul>
                <li>TypeScript</li>
                <li>React JS</li>
                <li>Nuxt JS</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="skills">
              <ul>
                <li>Node JS</li>
                <li>Nest JS</li>
                <li>Graph QL</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="skills">
              <ul>
                <li>SQL</li>
                <li>Mongo DB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
