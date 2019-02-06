import validator from 'email-validator';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import ErrorField from '../common/error-field';

class AddUserForm extends Component {
	static propTypes = {};

	render() {
		return (
			<div>
				<h3>Add User</h3>
				<form onSubmit={this.props.handleSubmit}>
					<div>
						<div>firstname:</div>
						<div>
							<Field component={ErrorField} name="firstname" />
						</div>
					</div>
					<div>
						<div>lastname:</div>
						<div>
							<Field component={ErrorField} name="lastname" />
						</div>
					</div>
					<div>
						<div>email:</div>
						<div>
							<Field component={ErrorField} name="email" />
						</div>
					</div>
					<button type="submit">Add User</button>
				</form>
			</div>
		);
	}
}

const validate = ({ email, firstname, lastname }) => {
	const errors = {};

	if (!email) errors.email = "Email is required";
	if (!firstname) errors.firstname = "Firstname is required";
	if (!lastname) errors.lastname = "Lastname is required";

	if (!validator.validate(email)) errors.email = "Email is invalid";

	return errors;
};

export default reduxForm({
	form: "add-user",
	validate
})(AddUserForm);
