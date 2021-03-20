import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Writing from "./routes/Writing";
import SignupForm from "./components/SignupForm";
import Login from "./routes/Login";
import PageNotFound from "./routes/404";
import Board from "./routes/Board";
import firebase from "firebase/app";
import "firebase/auth";
import Profile from "./components/Profile";
import { auth } from "./firebase.utils";
import { use } from "marked";
import PostView from "./components/PostView";

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
      authenticated: this.user != null,
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
          <Nav user={this.state.user} parentFunction={this.parentFunction} />

          <Switch>
            {/* <AuthRoute
              authenticated={authenticated}
              path="/profile"
              render={(props) => <Profile user={user} {...props} />}
            /> */}
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/writing" component={Writing} />
            <Route path="/board" component={Board} exact={true} />
            <Route path="/PostView/:no" exact={true} component={PostView} />

            {/* onCreate={this.handleCreate} */}
            <SignupForm path="/signup" />
            <Profile
              user={this.state.user}
              path="/profile"
              component={Profile}
            />
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
