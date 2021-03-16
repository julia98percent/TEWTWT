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
// import { fire } from "./Firebase";
// import firebase from "firebase";
import Profile from "./components/Profile";

const GlobalStyle = createGlobalStyle`
  body {
    // background: #ffeb5a
  }
  textarea {
    height: 20%
  }
`;

class App extends Component {
  // constructor() {
  //   super();
  //   fire();
  // }

  // handleCreate = (data) => {
  //   console.log(data);
  // };
  render() {
    return (
      <div>
        <Router>
          <GlobalStyle />
          <Nav ji={this.data} />
          <Link to="profile">Profile</Link>
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/writing" component={Writing} />
            <Route path="/board" component={Board} />
            {/* onCreate={this.handleCreate} */}
            <SignupForm path="/signup" />
            <Route path="/login" component={Login} />
            <Route component={PageNotFound} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
