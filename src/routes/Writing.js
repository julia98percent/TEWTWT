import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import MDBox from "../components/MDBox";
import Buttons from "../components/Buttons";
import { HashRouter } from "react-router-dom";

class Writing extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Header />
          <Buttons />
          <MDBox />
          {/* <대충 아이콘 /> */}
        </HashRouter>
      </div>
    );
  }
}

export default Writing;
