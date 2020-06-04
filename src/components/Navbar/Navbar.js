import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="container ">
      <nav class="navbar navbar-expand-md navbar-light bg-light mt-3">
        <div class="nav-name" href="#">
          <a class="navbar-brand" href="#">
            <img
              src="https://img.icons8.com/dusk/500/000000/s.png"
              width="30"
              height="30"
              alt=""
              loading="lazy"
            />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto"></ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link nav-item-name" href="#">
                <p>HOME</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-item-name" href="#about">
                <p>ABOUT</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-item-name" href="#">
                <p>WORK</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-item-name" href="#">
                <p>CONTACT</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-item-name" href="#">
                <p>
                  <i class="fas fa-share-square">cv</i>
                </p>
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </nav>
    </div>
  );
};
