import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class SignInForm extends Component {
  static propTypes = {}

  render() {
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
          {!this.props.tooManySignInAttempts && (
            <button type="submit">Sign In</button>
          )}
        </form>
        {this.props.tooManySignInAttempts && (
          <h4 style={{ color: 'red' }}>Too many attempts!</h4>
        )}
      </div>
    )
  }
}

export default reduxForm({
  form: 'sign-in'
})(SignInForm)
