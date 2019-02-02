import React, { Component, Fragment } from 'react'
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import AuthPage from "../../routes/auth";
import AdminPage from "../../routes/admin";
import { isAuth } from "../../ducks/auth";
import Person from "../../routes/person";

const mapStateToProps = store => ({
  isUserAuth: isAuth(store),
});

class Main extends Component {
  render() {
    const { isUserAuth } = this.props;

    return (
      <section>
        {isUserAuth !== null ? (
          <Fragment>
            <Route path="/auth" component={AuthPage} />
            <Route path="/add-person" component={Person} />
            <PrivateRoute path="/admin" permitted={isUserAuth} component={AdminPage} />
          </Fragment>
        ) : (
          <p> Тут будет прелоадер </p>
        )}
      </section>
    )
  }
}

const PrivateRoute = ({ component: PrivateComponent, permitted, ...rest }) => (
  <Route
    {...rest}
    render={props => (permitted ? (
      <PrivateComponent {...props} />
    ) : (
      <Redirect to='/auth'/>
    ))
    }
  />
);

export default connect(mapStateToProps, null)(Main);
