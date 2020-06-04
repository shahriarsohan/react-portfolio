import React, { Component } from "react";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div id="contact" className="container">
        <div className="row">
          <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12 man-image">
            <img
              className="img-fluid rounded"
              src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="man"
            />
          </div>
          <div className="col-lg-8 col-md-7 col-sm-6 col-xs-12 about-section">
            <div className="main-name">
              <p>SHAHRIAR SOHAN</p>
            </div>
            <div className="main-name-title">
              <p>Full Stack Developer | AI Enthusiast</p>
            </div>
            <div className="main-name-uni">
              <p>
                <a target="_blank" href="https://www.bubt.edu.bd/">
                  Bangladesh University of Business and Technology (BUBT)
                </a>{" "}
                <p>Dept. of CSE (2019-Present)</p>
              </p>

              <p>
                From <i>Dhaka,Bangladesh</i>
              </p>
              <a target="_blank" href="https://www.facebook.com/soohan.py">
                <i class="fab fa-facebook"></i>
              </a>
              <a
                className="ml-3"
                style={{ color: "#EA4335" }}
                target="_blank"
                href="mailto:sohanmock@gmail.com"
              >
                <i class="fas fa-at"></i>
              </a>
              <a
                className="ml-3"
                style={{ color: "black" }}
                target="_blank"
                href="https://github.com/shahriarsohan"
              >
                <i class="fab fa-github"></i>
              </a>
              {/* <a
                className="ml-3"
                style={{ color: "#B92B27" }}
                target="_blank"
                href="#"
              >
                <i class="fab fa-quora"></i>
              </a> */}
              <a
                className="ml-3"
                style={{ color: "#B92B4" }}
                target="_blank"
                href="https://www.linkedin.com/in/sohanpy/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
              <a
                className="ml-3"
                style={{ color: "green" }}
                target="_blank"
                href="tel:+8801786910645"
              >
                <i class="fas fa-phone-alt"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
