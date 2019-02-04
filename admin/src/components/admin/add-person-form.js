import React from 'react'
import {Field, reduxForm} from 'redux-form'
import ErrorField from "../common/error-field";
import validator from 'email-validator'

class AddPersonForm extends React.Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <h3>Add person</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <Field name="firstName" component={ErrorField} label="First name"/>
                    <Field name="secondName" component={ErrorField} label="Second name"/>
                    <Field name="email" component={ErrorField} label="Email"/>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

const validate = ({firstName, secondName, email}) => {
    const errors = {}

    if (!firstName) errors.firstName = 'First name is a required field'

    if (!secondName) errors.secondName = 'Second name is a required field'

    if (!email) errors.email = 'email is a required field'
    else if (!validator.validate(email)) errors.email = 'invalid email'

    return errors
}

export default reduxForm({
    form: 'add-person',
    validate
})(AddPersonForm)