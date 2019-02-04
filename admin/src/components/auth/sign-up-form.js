 import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import validator from 'email-validator'
import ErrorField from "../common/error-field";

class SignUpForm extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <Field name="email" component={ErrorField} label="Email"/>
                    <Field name="password" type="password" component={ErrorField} label="Password"/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

const validate = ({email, password}) => {
    const errors = {}
    if (!email) errors.email = 'email is a required field'
    else if (!validator.validate(email)) errors.email = 'invalid email'

    if (!password) errors.password = 'password is a required field'
    else if (password.length < 8) errors.password = 'password is too short'

    return errors
}

export default reduxForm({
    form: 'sign-up',
    validate
})(SignUpForm)
