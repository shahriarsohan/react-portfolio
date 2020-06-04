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
              src={require("../../assets/PJ.jpg")}
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
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 thumbnail1">
            <div className="project-title">
              <p>OctoProfile Projects</p>
            </div>
            <div className="project-desc">
              <p>
                A nicer look at your GitHub profile and repo stats. Includes
                data visualizations of your top languages, starred repositories,
                and sort through your top repos by number of stars, forks, and
                size
              </p>
            </div>
            <div className="project-link">
              <a target="_blank" href="#">
                <button type="button" class="btn btn-outline-success">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              <a target="_blank" className="ml-3" href="#">
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
              <p>OctoProfile Projects</p>
            </div>
            <div className="project-desc">
              <p>
                A nicer look at your GitHub profile and repo stats. Includes
                data visualizations of your top languages, starred repositories,
                and sort through your top repos by number of stars, forks, and
                size
              </p>
            </div>
            <div className="project-link2 mb-2">
              <a target="_blank" href="#">
                <button type="button" class="btn btn-outline-success">
                  <i class="fab fa-github"></i>
                </button>
              </a>
              <a target="_blank" className="ml-3" href="#">
                <button type="button" class="btn btn-outline-danger">
                  <i class="fas fa-share"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 thumbnail1">
            <img
              class="image"
              src={require("../../assets/PJ.jpg")}
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
