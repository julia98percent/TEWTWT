import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBlock = styled.div`
  background-color:pink;
  height: 10vh;
  }
`;

class Nav extends Component {
  render() {
    return (
      <NavBlock>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
          <Link to="/writing">md파일 작성하기</Link>
          <Link to="/board">게시판</Link>
          <p>{this.props.ji}님 오늘도 좋은 하루!</p>
        </div>
      </NavBlock>
    );
  }
}

export default Nav;
