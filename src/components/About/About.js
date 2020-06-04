import React, { Component } from "react";

import "./style.css";

export default class About extends Component {
  render() {
    return (
      <div id="about" className="container">
        <div className="section-header">
          <h2>01. About Me</h2>
        </div>
        <div className="about-text">
          <p></p>
          <p>
            Hello! I'm Sohan, a freelance software engineer from{" "}
            <i>Dhaka,BD </i>
          </p>

          <p>
            I enjoy creating things that live on the internet, whether that be
            websites, applications, or anything in between. My goal is to always
            build products that provide pixel-perfect, performant experiences.
          </p>
        </div>
      </div>
    );
  }
}
