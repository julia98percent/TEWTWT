import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";

class LogoutBtn extends Component {
  LogoutFunc = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("정상적으로 로그아웃 되었습니당!");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  render() {
    return <button onClick={() => this.LogoutFunc()}>로그아웃</button>;
  }
}

export default LogoutBtn;
