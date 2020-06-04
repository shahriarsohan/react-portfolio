import React, { Component } from "react";
import "./sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-hide">
        <div class="icon-bar">
          <a
            target="_blank"
            href="https://www.facebook.com/soohan.py"
            class="facebook"
          >
            <i class="fa fa-facebook"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/shahriarsohan"
            class="twitter"
          >
            <i class="fab fa-github"></i>
          </a>
          <a target="_blank" href="mailto:sohanmock@gmail.com" class="google">
            <i class="fa fa-google"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sohanpy/"
            class="linkedin"
          >
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}
