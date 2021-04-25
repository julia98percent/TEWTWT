import React, { Component } from "react";
import InputEmoji from "./InputEmojiBtn";
import UploadPic from "./UploadPic";
import UploadToBoard from "./UploadToBoard";

class Buttons extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isModalOn: false,
  //   };
  // }
  render() {
    return (
      <div>
        <UploadPic />
        <InputEmoji />
        <UploadToBoard />
      </div>
    );
  }
}

export default Buttons;
