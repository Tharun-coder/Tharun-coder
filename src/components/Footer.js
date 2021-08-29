import React from "react";
import LinkedIn from "../assets/images/linkedin-icon-2.svg";

function Footer(props) {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>137, G.V.Residency, Coimbatore</p>
            </div>
            <div className="d-flex">
              <p>Tamil Nadu, India.</p>
            </div>
            <div className="d-flex">
              <a href="tel:6379020530">+(91) 6379020530</a>
            </div>
            <div className="d-flex">
              <p>tharunkumar.vijayakumar@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav" href="/#">
                  Home
                </a>
                <br />
                <a className="footer-nav" href="/#">
                  About Me
                </a>
              </div>
              <div className="col">
                <a className="footer-nav" href="/#">
                  Experience
                </a>
                <br />
                <a className="footer-nav" href="/#">
                  Portfolio
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center social-media">
              <a
                href="https://github.com/Tharun-coder"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-github fa-2x github" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tharun-kumar-943291121/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedIn} className="linkedin" alt="Not Available" />
              </a>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;{new Date().getFullYear()}&nbsp; | Designed by
              Tharun Kumar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
