import React from "react";
import projects from "../assets/projects";

import PortfolioCard from "./PortfolioCard";

function Portfolio(props) {
  return (
    <div className="portfolio-wrapper" id="portfolio">
      <div className="container">
        <h1 className="text-uppercase py-5 text-center">Portfolio</h1>
        <div className="image-box-wrapper  justify-content-center image-box">
          <div className="row card-row">
            {projects.map((project) => {
              return <PortfolioCard project={project} key={project.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
