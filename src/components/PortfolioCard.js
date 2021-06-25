import React from "react";
import dictImage from "../images/Vocabulary.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faLink,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";

function PortfolioCard({ project }) {
  return (
    <div className="col-lg-3 col-sm-12 card-container">
      <div className="portfolio-image-box">
        <img className="portfolio-image" src={dictImage} alt="Project Image" />
        <div className="overflow"></div>
        <a
          className="portfolio-icon-link"
          href="https://github.com/Tharun-coder/netflix-clone"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLink} />
        </a>
        <a
          className="portfolio-icon-deploy"
          href="https://tharun-coder.github.io/netflix-clone/"
          target="_blank"
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
