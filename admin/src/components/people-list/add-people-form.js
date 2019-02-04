import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import validator from "email-validator";
import ErrorField from "../common/error-field";

class AddPeopleForm extends Component {
    render() {
        return (
            <div>
                <h3>Add user</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <Field component={ErrorField} name="firstName" label="First Name"/>
                    <Field component={ErrorField} name="secondName" label="Second Name"/>
                    <Field component={ErrorField} name="email" label="Email"/>
                    <button type="submit">Add Person</button>
                </form>
            </div>
        )
    }
}

const validate = ({email, firstName, secondName}) => {
    const errors = {}
    if (!email) errors.email = 'email is a required field'
    else if (!validator.validate(email)) errors.email = 'invalid email'

    if (!firstName) errors.firstName = 'firstName is a required field'
    if (!secondName) errors.secondName = 'secondName is a required field'
    return errors
}

export default reduxForm({
    form: 'add-people',
    validate
})(AddPeopleForm)

