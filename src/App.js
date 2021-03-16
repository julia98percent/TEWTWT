import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Writing from "./routes/Writing";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import PageNotFound from "./routes/404";
import Board from "./routes/Board";

const GlobalStyle = createGlobalStyle`
  body {
    // background: #ffeb5a
  }
  textarea {
    height: 20%
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <GlobalStyle />
          <Nav ji="ji" />
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/writing" component={Writing} />
            <Route path="/board" component={Board} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
