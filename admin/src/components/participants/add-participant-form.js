import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import validator from 'email-validator'
import ErrorField from '../common/error-field'

class AddParticipantForm extends Component {
    render() {
        return (
            <div>
                <h3>Add Participant</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <Field name="firstName" component={ErrorField} label="First Name"/>
                    <Field name="lastName" component={ErrorField} label="Last Name"/>
                    <Field name="email" component={ErrorField} label="Email"/>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

const validate = ({firstName, lastName, email}) => {
    const errors = {}

    if (!firstName) errors.firstName = 'First Name is a required field'
    if (!lastName) errors.lastName = 'Last Name is a required field'

    if (!email) errors.email = 'email is a required field'
    else if (!validator.validate(email)) errors.email = 'invalid email'

    return errors
}

export default reduxForm({ form: 'add-participant' })(AddParticipantForm)
