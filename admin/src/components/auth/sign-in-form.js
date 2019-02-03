import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { createSelector } from 'reselect'

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
          <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'sign-in'
})(SignInForm)
