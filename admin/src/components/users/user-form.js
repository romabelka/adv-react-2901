import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import propTypes from 'prop-types'
import validator from 'email-validator'

import ErrorField from '../common/error-field'

class UserForm extends Component {
  static propTypes = {
    handleSubmit: propTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="firstName" component={ErrorField} />
          <Field name="lastName" component={ErrorField} />
          <Field name="email" component={ErrorField} />
          <button type="submit">Add User</button>
        </form>
      </div>
    )
  }
}

const validate = ({ email, firstName, lastName }) => {
  const errors = {}
  if (!email) {
    errors.email = 'email is a required field'
  } else if (!validator.validate(email)) {
    errors.email = 'invalid email'
  }

  if (!firstName) {
    errors.firstName = 'firstName is a required field'
  }

  if (!lastName) {
    errors.lastName = 'lastName is a required field'
  }

  return errors
}

export default reduxForm({
  form: 'user-form',
  validate
})(UserForm)
