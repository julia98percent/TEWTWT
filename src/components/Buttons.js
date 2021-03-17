import React, { Component } from "react";
import InputEmoji from "./InputEmojiBtn";
import UploadPic from "./UploadPic";

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
      </div>
    );
  }
}

export default Buttons;
