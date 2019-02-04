import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

class PrivateRoute extends Component {
	render() {
		const { component, ...rest } = this.props;

		return <Route {...rest} render={this.renderComponent} />;
	}

	renderComponent = props => {
		const { component: Component, authenticated } = this.props;

		if (authenticated) {
			return <Component {...props} />;
		}

		return <Redirect to="/auth" />;
	};
}

export default connect(({ auth }) => ({ authenticated: Boolean(auth.user) }))(
	PrivateRoute
);
