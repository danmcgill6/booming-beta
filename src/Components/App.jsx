import React, { Component } from "react";
import Home from "./Home";
import Nav from './Nav'
import Articles from './Articles'
import SignUp from './SignUp'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/signup" component={SignUp} />
        </div>
        </div>
      </Router>
    );
  }
}


