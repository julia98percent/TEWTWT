import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import LogoutBtn from "../components/LogoutBtn";
import { auth } from "../firebase.utils";
import firebase from "firebase/app";
import "firebase/auth";

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
          {/* <Link to="/login">Login</Link> */}
          <Link to="/writing">md파일 작성하기</Link>
          <Link to="/board">게시판</Link>
          <Link to="/profile">Profile</Link>
          {this.props.user ? (
            <>
              <p>Hello, {this.props.user}</p>
              <LogoutBtn>로그아웃</LogoutBtn>
            </>
          ) : (
            <>
              <p>Please sign in.</p>
              <Link to="/login">
                <button>로그인 해!!</button>
              </Link>
            </>
          )}
        </div>
      </NavBlock>
    );
  }
}

export default Nav;
