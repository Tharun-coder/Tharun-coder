import React from "react";

//React Fontawesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//React Scroll
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
      <div className="container">
        <Link className="navbar-brand" smooth={true} to="home" href="#">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-100}
                className="nav-link"
                href="#"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="skills"
                offset={-100}
                className="nav-link"
                href="#"
              >
                Skills
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                smooth={true}
                to="experience"
                offset={-100}
                className="nav-link"
                href="#"
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-100}
                className="nav-link"
                href="#"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contact"
                offset={-100}
                className="nav-link"
                href="#"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
