import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase.utils";
import firebase from "firebase/app";
import Login from "../routes/Login";

const NavBlock = styled.div`
  background-color:pink;
  height: 10vh;
  }
`;

const Nav = (props) => {
  const LogoutFunc = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        alert("정상적으로 로그아웃 되었습니다:)");
      })
      .catch((error) => {
        // An error happened.
        alert("에러가 발생했습니다. 다시 시도해주세요!");
        console.log(error);
      });
  };
  return (
    <NavBlock>
      <div>
        {props.isLoggedIn ? (
          <>
            <p>안녕하세요 {props.user}님! 오늘도 좋은 하루 되세요🌹</p>
            <button onClick={() => LogoutFunc()}>logout</button>
          </>
        ) : (
          <>
            <p>로그인 해주세요!</p>
            <Link to="/login">
              <button>로그인</button>
            </Link>
          </>
        )}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/writing">md파일 작성하기</Link>
        <Link to="/board">게시판</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </NavBlock>
  );
};

export default Nav;
