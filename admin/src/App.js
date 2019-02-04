import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Route } from 'react-router-dom';

import PrivateRoute from './components/common/private-route';
import AdminPage from './components/routes/admin';
import AuthPage from './components/routes/auth';
import { initUser } from './ducks/auth';

class App extends Component {
	static propTypes = {};

	componentDidMount() {
		this.props.initUser();
		// this.props.dispatch(initUser());
	}

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
					</ul>
				</nav>
				<section>
					<Route path="/auth" component={AuthPage} />
					<PrivateRoute path="/admin" component={AdminPage} />
				</section>
			</div>
		);
	}
}

export default connect(
	null,
	{ initUser }
)(App);
