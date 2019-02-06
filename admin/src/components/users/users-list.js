import React, { Component } from 'react';

class UsersList extends Component {
	static propTypes = {};

	render() {
		return (
			<div>
				<h3>Users List</h3>
				<ul>
					<li>
						{this.props.users !== null &&
							this.props.users.map(({ lastname, firstname, email, id }) => {
								return (
									<div key={id}>
										{lastname} {firstname} {email}
									</div>
								);
							})}
					</li>
				</ul>
			</div>
		);
	}
}

export default UsersList;
