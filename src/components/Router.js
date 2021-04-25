import React, { Component } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../routes/Home";
import Nav from "../components/Nav";
import About from "../routes/About";
import Writing from "../routes/Writing";
import SignupForm from "../components/SignupForm";
import Login from "../routes/Login";
import PageNotFound from "../routes/404";
import Board from "../routes/Board";
import Profile from "../components/Profile";
import PostView from "../components/PostView";

const AppRouter = ({ isLoggedIn }, { user }) => {
  return (
    <Router>
      <Switch>
        <>
          <Route user={user} exact path="/" component={Home} />
          <Route user={user} path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/writing" component={Writing} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/PostView/:no" component={PostView} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Route} />
        </>
      </Switch>
    </Router>
  );
};
export default AppRouter;
