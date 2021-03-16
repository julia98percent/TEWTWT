import React, { Component } from "react";
import InputEmoji from "./InputEmoji";
import UploadPic from "./UploadPic";

class Buttons extends Component {
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
