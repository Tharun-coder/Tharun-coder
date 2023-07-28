import React from "react";
import experiences from "../constants/experience";

function Experience(props) {
  return (
    <div className="experience" id="experience">
      <div className="d-flex justify-content-center experience-header">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        {experiences.map((each, i) => {
          return (
            <div
              className={`experience-block experience-block-${
                i % 2 !== 1 ? "left" : "right"
              }`}
              key={i}
            >
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>{each.designation}</h3>
                <h5>{each.company}</h5>
                <div>
                  <ul>
                    {each.duties.map((duty, i) => {
                      return (
                        <li className="content" key={i}>
                          {duty}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
