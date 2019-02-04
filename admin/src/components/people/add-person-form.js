import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import validator from 'email-validator'
import ErrorField from "../common/error-field";

class AddPersonForm extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h3>Add Person</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <Field name="firstName" component={ErrorField} label="First Name"/>
                    <Field name="lastName" component={ErrorField} label="Last Name"/>
                    <Field name="email" component={ErrorField} label="Email"/>
                    <button type="submit">Add Person</button>
                </form>
            </div>
        )
    }
}

const validate = ({firstName, lastName, email}) => {
    const errors = {}
    if (!email) errors.email = 'email is a required field'
    else if (!validator.validate(email)) errors.email = 'invalid email'

    if (!firstName) errors.firstName = 'first name is a required field'
    if (!lastName) errors.lastName = 'last name is a required field'

    return errors
}

export default reduxForm({
    form: 'add-person',
    validate
})(AddPersonForm)
