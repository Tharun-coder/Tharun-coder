import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faLink } from "@fortawesome/free-solid-svg-icons";

function PortfolioCard({ project }) {
  return (
    <div className="col-lg-3 col-sm-12 card-container">
      <div className="portfolio-image-box">
        <img
          className="portfolio-image"
          src={project.image}
          alt="Not Available"
        />
        <div className="overflow"></div>
        <a
          className="portfolio-icon-link"
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLink} />
        </a>
        <a
          className="portfolio-icon-deploy"
          href={project.deploy}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </div>
      <div className="card-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <p>
          <b>Technologies Used - </b>
          {project.technology}
        </p>
      </div>
    </div>
  );
}

export default PortfolioCard;
