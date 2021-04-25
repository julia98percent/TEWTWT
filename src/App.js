import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { auth } from "./firebase.utils";
// import { use } from "marked";
import AppRouter from "./components/Router";

const GlobalStyle = createGlobalStyle`
  body {
    // background: #ffeb5a
  }
  textarea {
    height: 20%
  }
`;

const App = () => {
  const [user, setUser] = useState("");
  const [init, setInit] = useState(false);
  //auth.currentUser 넣으면 안됨 -> useState는 로그인 상태를 알수 없기 때문
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user.email);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  });

  return (
    <div>
      <Router>
        <GlobalStyle />
        <>
          {init ? (
            <>
              <Nav user={user} isLoggedIn={isLoggedIn} />
              <AppRouter user={user} isLoggedIn={isLoggedIn} />
            </>
          ) : (
            "초기화중입니다요....굽신굽신"
          )}
        </>
      </Router>
    </div>
  );
};

export default App;
