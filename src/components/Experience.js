import React from "react";

function Experience(props) {
  return (
    <div className="experience" id="experience">
      <div className="d-flex justify-content-center experience-header">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="experience-block experience-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Software Engineer-Testing (2018-2021)</h3>
            <h5>SIERRA ODC Private Limited, Coimbatore, Tamil Nadu</h5>
            <p>
              <ul>
                <li className="content">
                  Conducted regression testing, analysed results and submitted
                  observations to development team.
                </li>
                <li className="content">
                  Discussed project progress with customers, collected feedback
                  on different stages and directly addressed concerns.
                </li>
                <li className="content">
                  Reviewed project specifications and designed technology
                  solutions that met or exceeded client expectations.
                </li>
                <li className="content">
                  Travelled to key account locations to train and provide
                  technical direction for successful completion of product
                  launches.
                </li>
                <li className="content">
                  Researched, designed and implemented scalable applications for
                  information identification, extraction, analysis, retrieval
                  and indexing.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="experience-block experience-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Quality Analyst (2017-2018)</h3>
            <h5>PERSONIV, Coimbatore, Tamil Nadu</h5>
            <p>
              <ul>
                <li className="content">
                  Inspected, verified and documented quantifiable
                  characteristics of finished designs, comparing against
                  customer specifications and company quality standards to
                  achieve acceptable design.
                </li>
                <li className="content">
                  Developed and maintained quality assurance procedure
                  documentation.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className="experience-block experience-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Network Engineer (2016-2017)</h3>
            <h5>GALORE NETWORKS, Coimbatore, Tamil Nadu</h5>
            <p>
              <ul>
                <li className="content">
                  Monitored servers and escalated emergency technical issues
                  beyond scope to maintain optimum up-time.
                </li>
                <li className="content">
                  Have knowledge in Networking software's - Radwin, Putty etc.
                </li>
                <li className="content">
                  Worked as vendor for TATA Communications RF Net Connections.
                </li>
                <li className="content">
                  Have complete knowledge about overall RF network structure &
                  setup.
                </li>
                <li className="content">
                  Supported users in setup and configuration of wireless bridge
                  networks.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
