import React, { Component } from "react";
import { project } from "../../assets/PJ.jpg";

import "./featuredwork.css";

export default class FeaturedWork extends Component {
  render() {
    return (
      <div id="work" className="container">
        <div className="section-header">
          <h2>02.Some of my work</h2>
        </div>
        <div className="row mt-3">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 thumbnail1">
            <img
              class="image"
              src={require("../../assets/project1.png")}
              alt="project-thumbnail"
            />
            <div class="middle">
              <div class="text">
                <a
                  target="_blank"
                  href="https://frosty-shannon-097385.netlify.app/"
                >
                  <i class="fas fa-share"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 thumbnail1">
            <div className="project-title">
              <p>Covid-19 Tracker Projects</p>
            </div>
            <div className="project-desc">
              <p>
                Its a covid 19 statistics app powered by <b>React js</b> and{" "}
                <b>chart js</b>.Here you will find everyday stats of covid 19
                with user friendly UI.
                <p>
                  <b>Stay Home and be safe</b>
                </p>
              </p>
            </div>
            <div className="project-link">
              <a
                target="_blank"
                href="https://github.com/shahriarsohan/corona-tracker"
              >
                <button type="button" class="btn btn-outline-success">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              <a
                target="_blank"
                className="ml-3"
                href="https://frosty-shannon-097385.netlify.app/"
              >
                <button type="button" class="btn btn-outline-danger">
                  <i class="fas fa-share"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <br />
        <div className="row mt-3">
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 thumbnail1">
            <div className="project-title">
              <p>Weather Application</p>
            </div>
            <div className="project-desc">
              <p>
                A nicer look weather app.Its a very simple weather realtime
                weather app with openweathermap API.
              </p>
            </div>
            <div className="project-link2 mb-2">
              <a
                target="_blank"
                href="https://github.com/shahriarsohan/weather-app"
              >
                <button type="button" class="btn btn-outline-success">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              <a
                target="_blank"
                className="ml-3"
                href="https://blissful-kalam-4fc377.netlify.app/"
              >
                <button type="button" class="btn btn-outline-danger">
                  <i class="fas fa-share"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 thumbnail1">
            <img
              class="image"
              src={require("../../assets/proj2")}
              alt="project-thumbnail"
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
        <div className="show-more mt-5">
          <a target="_blank" href="https://github.com/shahriarsohan">
            <button
              type="button"
              class="btn btn-outline-success btn-lg btn-block"
            >
              Show more on <i class="fab fa-github"></i>github
            </button>
          </a>
        </div>
      </div>
    );
  }
}
