import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../firebase.utils";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        //create account
        data = await auth.createUserWithEmailAndPassword(email, password);
      } else {
        //log in
        data = await auth.signInWithEmailAndPassword(email, password);
      }
      history.push("/");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Log In"}
        ></input>
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Log In" : "Create Account"}
      </span>
      <div>
        <button>Continue With Google</button>
      </div>
    </div>
  );
};
export default Login;
