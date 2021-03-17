import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Writing from "./routes/Writing";
import SignupForm from "./components/SignupForm";
import Login from "./components/LoginForm";
import PageNotFound from "./routes/404";
import Board from "./routes/Board";
import firebase from "firebase/app";
import "firebase/auth";
import Profile from "./components/Profile";
import { auth } from "./firebase.utils";
import { use } from "marked";

const GlobalStyle = createGlobalStyle`
  body {
    // background: #ffeb5a
  }
  textarea {
    height: 20%
  }
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  parentFunction = (data) => {
    this.setState({
      user: data,
    });
    console.log(data + "!!");
  };
  render() {
    return (
      <div>
        <Router>
          <GlobalStyle />
          <Nav user={this.state.user} />

          <Switch>
            {/* <AuthRoute
              authenticated={authenticated}
              path="/profile"
              render={(props) => <Profile user={user} {...props} />}
            /> */}
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/writing" component={Writing} />
            <Route path="/board" component={Board} />
            {/* onCreate={this.handleCreate} */}
            <SignupForm path="/signup" />
            <Route path="/profile" component={Profile} />
            {/* <Route path="/login" component={Login} signin={this.signin} /> */}
            <Login parentFunction={this.parentFunction} path="/login" />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
