import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";

class SignupForm extends Component {
  state = {
    name: "",
    id: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      //target의 name과 value 추출해서 set
      //Computed property names 문법 사용
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.id, this.state.password)
      .then((user) => {
        alert("가입해써");
        this.setState({
          id: "",
          password: "",
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == "auth/invalid-email") {
          alert("이메일 형식 확인해!");
        } else if (errorCode == "auth/weak-password") {
          alert("비밀번호는 최소 6자 이상으로ㅡㅡ");
        } else alert(errorMessage + "  " + errorCode);
      });
    // this.props.onCreate(this.state);
    // 상태 초기화
  };

  render() {
    return (
      <>
        <p>회원가입 창입니ㄷr...^^</p>

        <form onSubmit={this.handleSubmit}>
          {/* <input
            type="text"
            placeholder="name"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          /> */}
          <input
            type="text"
            placeholder="id"
            name="id"
            onChange={this.handleChange}
            value={this.state.id}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <div>
            {this.state.name} {this.state.id} {this.state.password}
          </div>
          <button itype="submit">회원 가입</button>
        </form>
      </>
    );
  }
}

export default SignupForm;
