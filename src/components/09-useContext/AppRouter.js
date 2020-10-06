import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { Navbar } from "./Navbar";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
            <Route exact path="/about" component={AboutScreen}></Route>
            <Route exact path="/login" component={LoginScreen}></Route>

            <Route component={HomeScreen}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
