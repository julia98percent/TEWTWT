import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";

class LoginForm extends Component {
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
      .signInWithEmailAndPassword(this.state.id, this.state.password)
      .then(function (firebaseUser) {
        //성공하면 firebaseUser에 유저 정보 값이 담겨 넘어온다.
        alert("loginSuccess(firebaseUser)");
      })
      .catch(function (error) {
        // 실패했을 때 에러 처리
        alert(error);
        alert("로그인 실패");
      });
  };

  render() {
    return (
      <>
        <p>Login...^^</p>

        <form onSubmit={this.handleSubmit}>
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
          <button itype="submit">로그인</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
