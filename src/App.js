import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import Header from "./components/Header";
import UploadPic from "./components/UploadPic";
import InputEmoji from "./components/InputEmoji";
import MDBox from "./components/MDBox";

const GlobalStyle = createGlobalStyle`
  body {
    background: #ffeb5a
  }
  textarea {
    height: 20%
  }
`;

class App extends Component {
  state = {
    text: "안냐세용",
  };
  render() {
    return (
      <div>
        <GlobalStyle />
        <Template>
          <Header />
          <UploadPic />
          <InputEmoji />
          <MDBox />
          {/* <대충 아이콘 /> */}
        </Template>
      </div>
    );
  }
}

export default App;
