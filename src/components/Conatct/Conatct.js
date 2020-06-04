import React, { Component } from "react";
import "../Technology/technology.css";

export default class Technology extends Component {
  render() {
    return (
      <div className="container">
        <div className="section-header">
          <h2>03.Contact Me</h2>
        </div>

        <div className="row d-flex justify-content-center mt-5 ">
          <div className="col-lg-2 col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style2">
            <img
              class="image"
              src={require("../../assets/css3.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a target="_blank" href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style">
            <img
              class="image"
              src={require("../../assets/react.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a target="_blank" href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style">
            <img
              class="image"
              src={require("../../assets/redux.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a target="_blank" href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style">
            <img
              class="image"
              src={require("../../assets/npm.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a target="_blank" href="#">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
