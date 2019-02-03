import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  render() {
    const { component, ...rest } = this.props;

    return <Route {...rest} render={this.renderComponent} />;
  }

  renderComponent = props => {
    const { component: Component, isAuth } = this.props;

    if (isAuth) {
      return <Component {...props} />;
    }

    return <Redirect to="/auth" />;
  };
}

export default connect(({ auth }) => ({ isAuth: Boolean(auth.user) }))(
  PrivateRoute
);
