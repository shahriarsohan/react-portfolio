import React, { Component } from "react";
import "./technology.css";

export default class Technology extends Component {
  render() {
    return (
      <div className="container">
        <div className="section-header1">
          <p>03.Technologies I love to work with</p>
        </div>
        <div className="frontend-button mt-3">
          <h2>
            <i style={{ color: "green" }} class="fas fa-tv"></i> Frontend
          </h2>
        </div>

        <div className="row d-flex justify-content-center mt-5 ">
          <div className="col-lg-2 col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style visible-lg">
            <img
              class="image"
              src={require("../../assets/html-5.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a target="_blank" href="https://www.w3schools.com/html/">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style visible-lg">
            <img
              class="image"
              src={require("../../assets/css3.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a target="_blank" href="https://www.w3schools.com/css/">
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
                <a target="_blank" href="https://reactjs.org/">
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
                <a target="_blank" href="https://redux.js.org/">
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
                <a target="_blank" href="https://www.npmjs.com/">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="frontend-button mt-3">
          <h2>
            <i style={{ color: "green" }} class="fas fa-tv"></i> Backend
          </h2>
        </div>

        <div className="row d-flex justify-content-center mt-5 ">
          <div className="col-lg-2 col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style">
            <img
              class="image"
              src={require("../../assets/python.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a target="_blank" href="https://www.python.org/">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style">
            <img
              class="image"
              src={require("../../assets/django.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a target="_blank" href="https://www.djangoproject.com/">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 visible-lg col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style">
            <img
              class="image"
              src={require("../../assets/api-settings.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a
                  target="_blank"
                  href="https://en.wikipedia.org/wiki/Application_programming_interface"
                >
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 visible-lg col-md-2 thumbnail1  col-sm-2 col-xs-6 image-style">
            <img
              class="image"
              src={require("../../assets/postgreesql.png")}
              alt="logo"
            />
            <div class="middle">
              <div class="text">
                <a target="_blank" href="https://www.postgresql.org/">
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bootom-text mt-5">
          <p>
            As an AI Enthusiast I am also semi-comfortable with some Deep
            Learning technologies like <a href="#">Tensorflow</a>,{" "}
            <a href="#">Keras</a> and some other technologies like{" "}
            <a href="#">Panda</a>,<a href="#">Numpy</a> and{" "}
            <a href="#">Matplotlib</a>.
          </p>
        </div>
      </div>
    );
  }
}
