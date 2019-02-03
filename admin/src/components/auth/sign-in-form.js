import React from 'react'
import {reduxForm, Field} from 'redux-form'

const SignInForm = ({handleSubmit}) => (
  <div>
    <h3>Sign In</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          email:
        </div>
        <div>
          <Field component="input" name="email"/>
        </div>
      </div>
      <div>
        <div>
          password:
        </div>
        <div>
          <Field component="input" name="password" type="password"/>
        </div>
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
);

export default reduxForm({
  form: 'sign-in'
})(SignInForm)
