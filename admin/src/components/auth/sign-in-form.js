import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { errorCountSelector, errorSelector } from '../../ducks/auth'

class SignInForm extends Component {
  static propTypes = {}

  render() {
    const { error, errorCount } = this.props
    return (
      <div>
        <h3>Sign In</h3>
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <div>email:</div>
            <div>
              <Field component="input" name="email" />
            </div>
          </div>
          <div>
            <div>password:</div>
            <div>
              <Field component="input" name="password" type="password" />
            </div>
          </div>
          <div style={{ color: 'red' }}>
            {error && (error.code, error.message)}
          </div>
          <button type="submit" disabled={errorCount > 3 && 'disabled'}>
            Sign In
          </button>
          <div style={{ color: 'red' }}>
            {errorCount > 3 &&
              'cant press, typed wrong email / password more than 3 times'}
          </div>
        </form>
      </div>
    )
  }
}

export default compose(
  reduxForm({
    form: 'sign-in'
  }),
  connect((state) => ({
    error: errorSelector(state),
    errorCount: errorCountSelector(state)
  }))
)(SignInForm)
