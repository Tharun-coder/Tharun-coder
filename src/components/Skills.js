import React from "react";

function Skills(props) {
  return (
    <div className="container skills-wrapper" id="skills">
      <div className="row">
        <div className="col-lg-12 col-sm-12">
          <h1 className="skills-header">Skills</h1>
        </div>
        <div className="row skills-content">
          <div className="col-lg-4 col-sm-12">
            <div className="skills">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="skills-center">
              <ul>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Node JS</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
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
