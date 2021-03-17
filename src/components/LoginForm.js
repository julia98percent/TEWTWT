import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";
// function childFunction() {
//   this.props.signin(this.firebaseUser);
// }
class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      id: "",
      password: "",
      firebaseUser: null,
    };
    this.childFunction = this.childFunction.bind(this);
  }
  // state = {
  //   name: "",
  //   id: "",
  //   password: "",
  // };

  handleChange = (e) => {
    this.setState({
      //target의 name과 value 추출해서 set
      //Computed property names 문법 사용
      [e.target.name]: e.target.value,
    });
  };
  childFunction = (props) => {
    if (props == undefined) {
      console("아니 왜...ㅅㅂ");
    } else this.props.parentFunction(props);
  };

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.id, this.state.password)
      .then((user) => {
        //성공하면 firebaseUser에 유저 정보 값이 담겨 넘어온다.
        console.log(user.user.email);
        this.childFunction(user.user.email);
      });
    // .catch(function (error) {
    //   // 실패했을 때 에러 처리
    //   alert(error);
    //   alert("로그인 실패");
    // });
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
          <button type="submit">로그인</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
