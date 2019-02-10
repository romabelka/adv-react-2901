import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { errorSelector } from '../../ducks/auth'
import validator from 'email-validator'
import ErrorField from '../common/error-field'

class SignInForm extends Component {
  static propTypes = {}

  render() {
    const { handleSubmit, error } = this.props

    return (
      <div>
        <h3>Sign In</h3>
        <form onSubmit={handleSubmit}>
          <Field name="email" component={ErrorField} label="Email" />
          <Field
            name="password"
            type="password"
            component={ErrorField}
            label="Password"
          />
          <button disabled={Boolean(error)} type="submit">
            Sign In
          </button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
      </div>
    )
  }
}

const validate = ({ email, password }) => {
  const errors = {}
  if (!email) errors.email = 'email is a required field'
  else if (!validator.validate(email)) errors.email = 'invalid email'

  if (!password) errors.password = 'password is a required field'
  else if (password.length < 8) errors.password = 'password is too short'

  return errors
}

export default compose(
  reduxForm({
    form: 'sign-in',
    validate
  }),
  connect((state) => ({ error: errorSelector(state) }))
)(SignInForm)
