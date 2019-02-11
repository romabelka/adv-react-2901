import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { authError, isLimitReached } from '../../ducks/auth'

class SignInForm extends Component {
  static propTypes = {}

  render() {
    const { isLimitReached, signInError } = this.props
    const errorText = signInError && (
      <h3 style={{ color: 'red' }}>{signInError.message}</h3>
    )
    const limitText = isLimitReached && (
      <h3 style={{ color: 'red' }}>Sign In Limit Reached</h3>
    )
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
          {errorText}
          {limitText}
          <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

export default connect((state) => ({
  signInError: authError(state),
  isLimitReached: isLimitReached(state)
}))(
  reduxForm({
    form: 'sign-in'
  })(SignInForm)
)
