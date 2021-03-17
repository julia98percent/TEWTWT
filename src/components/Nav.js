import React, { Component } from "react";
import { Link, histoty } from "react-router-dom";
import styled from "styled-components";
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
  childFunction = (props) => {
    if (props == undefined) {
      console.log("아니 왜...ㅅㅂ");
    } else this.props.parentFunction(props);
  };

  LogoutFunc = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.childFunction(null);

        alert("정상적으로 로그아웃 되었습니당!");
        // Sign-out successful.
        this.history.push("/");
        console.log("props: " + this.props.user);
      })
      .catch((error) => {
        // An error happened.
        alert("에러가 발생했습니다 다시 시도해주세요");
        console.log(error);
      });
  };

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
              {/* <LogoutBtn user={this.props.user}>로그아웃</LogoutBtn> */}
              <button onClick={() => this.LogoutFunc()}>logout</button>
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
