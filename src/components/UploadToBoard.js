import React from "react";
import { database } from "../firebase.utils";
// import styled from "styled-components";

function UploadToBoard() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function writeUserData(email) {
    database
      .ref("users/" + email)
      .set({
        email: email,
        date: dateString,
      })
      .then(console.log("create done!"));
  }

  return <button onClick={() => writeUserData("ji")}>글 쓰기</button>;
}

export default UploadToBoard;
