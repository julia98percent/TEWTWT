import React, { Component } from "react";
import Modal from "./Modal";

class InputEmoji extends Component {
  constructor() {
    super();
    this.state = {
      isModalOn: false,
    };
  }

  handleModal = (e) => {
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
    console.log(this.state.isModalOn);
  };

  parentFunction2 = (e) => {
    this.setState({
      isModalOn: !this.state.isModalOn,
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleModal()}>이모지모지</button>
        {this.state.isModalOn == true ? (
          <Modal
            parentFunction2={this.parentFunction2}
            isModalOn={this.state.isModalOn}
          />
        ) : (
          console.log("sibal...")
        )}
      </div>
    );
  }
}

export default InputEmoji;
