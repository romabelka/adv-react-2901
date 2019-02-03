import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AuthPage from "./components/routes/auth";
import AdminPage from "./components/routes/admin";

class App extends Component {
  static propTypes = {};

  render() {
    return (
        <Switch>
          <Route exact path="/" component={AuthPage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
    );
  }
}

export default (App);
