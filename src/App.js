import React, { Component } from "react";

import { Cube } from "styled-loaders-react";
import Comp from "./Comp";

export default class App extends Component {
  state = {
    loading: false,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 3000);
  };

  render() {
    const { loading } = this.state;
    return (
      <>
        {" "}
        {loading ? (
          <div className="loading-item">
            <Cube color="blue" />
          </div>
        ) : (
          <Comp />
        )}
      </>
    );
  }
}
