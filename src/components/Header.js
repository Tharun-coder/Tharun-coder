import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Typed from "react-typed";

function Header(props) {
  const fileUrl =
    "https://drive.google.com/file/d/1q_f1cSCU8pjRzCNOfeFxzHyE5xILWYci/view?usp=sharing";

  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>I am Tharun Kumar </h1>
        <Typed
          strings={[
            "Full Stack Developer",
            "MERN Stack Developer",
            "Front End Developer",
          ]}
          className="typed-text"
          typeSpeed={80}
          backSpeed={100}
          loop
        />
        <a
          className="btn-main-resume"
          href={fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          download="Tharun_Kumar.pdf"
        >
          <FontAwesomeIcon icon={faDownload} style={{ marginRight: "10px" }} />
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Header;
