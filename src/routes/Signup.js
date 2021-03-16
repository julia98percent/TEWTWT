import React, { Component, useState } from "react";
function Signup() {
  // const [inputs, setInputs] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const { name, email, password } = inputs; // 비구조화 할당을 통해 값 추출

  // const onChange = (e) => {
  //   const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
  //   setInputs({
  //     ...inputs, // 기존의 input 객체를 복사한 뒤
  //     [name]: value, // name 키를 가진 값을 value 로 설정
  //   });
  // };

  // const onReset = () => {
  //   setInputs({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  // };

  //   const { from } = location.state || { from: { pathname: "/" } };
  //   if (authenticated) return <Redirect to={from} />;

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        // onChange={onChange}
        // value={name}
      />
      <input
        name="email"
        placeholder="이메일"
        // onChange={onChange}
        // value={email}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        // onChange={onChange}
        // value={password}
      />
      {/* <button onClick={onReset}>초기화</button> */}
      {/* <button onClick={FB.joinUs(email, password)}>회원가입</button> */}
      <button>SIGN IN WITH GOOGLE</button>
      <div>{/* <b>값: </b>({name} {email} {password}) */}</div>
    </div>
  );
}

export default Signup;
