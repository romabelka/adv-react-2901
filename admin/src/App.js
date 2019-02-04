import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AuthPage from "./components/routes/auth";
import AdminPage from "./components/routes/admin";
import UsersPage from "./components/routes/users";
import AdminAuthRoute from "./components/routes/AdminAuthRoute";

class App extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/auth" activeStyle={{ color: "red" }}>
                auth
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeStyle={{ color: "red" }}>
                admin
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" activeStyle={{ color: "red" }}>
                users
              </NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Route path="/auth" component={AuthPage} />
          <AdminAuthRoute path="/admin" component={AdminPage} />
          <Route path="/users" component={UsersPage} />
        </section>
      </div>
    );
  }
}

export default App;
