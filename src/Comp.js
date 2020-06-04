import React, { Component } from "react";

import { Navbar } from "./components/Navbar/Navbar";
import MainHead from "./components/MainHead/MainHead";
import About from "./components/About/About";
import FeaturedWork from "./components/Work/FeaturedWork";
import Technology from "./components/Technology/Technology";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/Sidebar/Sidebar";

export default class Comp extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <Navbar />
        <hr />
        <br />
        <MainHead />
        <br />
        <hr />
        <br />
        <About />
        <br />
        <hr />
        <br />
        <FeaturedWork />
        <br />
        <hr />
        <br />
        <Technology />
        <br />
        <hr />
        <br />
        <Footer /> <br />
        <hr />
      </div>
    );
  }
}
