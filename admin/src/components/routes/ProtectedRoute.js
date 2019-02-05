import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  if (!user) return <Redirect to="/auth" {...rest} />;
  return <Component />;
};

export default connect(state => ({ user: state.auth.user}))(ProtectedRoute);