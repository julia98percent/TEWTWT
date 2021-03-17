// import React, { Component } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";

// class LogoutBtn extends Component {
//   LogoutFunc = () => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         alert("정상적으로 로그아웃 되었습니당!");
//         // Sign-out successful.
//         console.log(this.props.user);
//       })
//       .catch((error) => {
//         // An error happened.
//         alert("에러가 발생했습니다 다시 시도해주세요");
//       });
//   };

//   render() {
//     return <button onClick={() => this.LogoutFunc()}>로그아웃</button>;
//   }
// }

// export default LogoutBtn;
