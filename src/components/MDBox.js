import React, { Component } from "react";
const marked = require("marked");

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "마크다운 문법으로 작성해주세요!",
    };
  }

  handleChange = (e) => {
    this.setState({
      Text: e.target.value,
      MarkedText: marked(e.target.value),
    });
  };

  render() {
    return (
      <>
        <textarea
          placeholder={this.state.value}
          value={this.state.Text}
          onChange={this.handleChange}
        />
        <div dangerouslySetInnerHTML={{ __html: this.state.MarkedText }} />
      </>
    );
  }
}

export default TextBox;
