import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUser } from '../../../ducks/users';
import { usersListSelector } from '../../../ducks/users';
import AddUserForm from '../../users/add-user-form';
import UsersList from '../../users/users-list';

class UsersPage extends Component {
	static propTypes = {};

	render() {
		console.log("props: ", this.props);
		return (
			<div>
				<h1>Users Page</h1>
				{console.log("props passing to list ", this.props.users)}

				<AddUserForm onSubmit={this.handleSubmit} />
				<UsersList users={this.props.users} />
			</div>
		);
	}

	handleSubmit = ({ firstname, lastname, email }) =>
		this.props.addUser(firstname, lastname, email);

	// passUser = ()
}

function mapStateToProps(state) {
	return {
		users: usersListSelector(state)
	};
}

export default connect(
	mapStateToProps,
	{ addUser }
)(UsersPage);
