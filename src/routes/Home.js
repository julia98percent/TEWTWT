import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import MDBox from "../components/MDBox";
import Buttons from "../components/Buttons";
import Nav from "../components/Nav";
import { HashRouter, Route } from "react-router-dom";
import Writing from "./Writing";

import { Link } from "react-router-dom";

export default function Home(props) {
  return (
    <div style={{ paddingTop: "50px" }}>
      <div>실시간으로 markdown 파일을 미리보면서</div>
      <div>TIL을 가장 쉽게 작성하는</div>
      <div>TEWTWT</div>
      <div>The easiest way to writing TIL</div>
      <Link to="/writing">
        <button>지금 바로! TIL 쓰러가기!^o^</button>
      </Link>
    </div>
  );
}
