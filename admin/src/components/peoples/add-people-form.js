import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import ErrorField from '../common/error-field'
import validator from 'email-validator'

class AddPeopleForm extends Component {


  render() {
    return (
      <div>
        <h1>AddPeopleForm</h1>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="fname" component={ErrorField} label="First Name"/>
          <Field name="lname" component={ErrorField} label="Last Name"/>
          <Field name="email" component={ErrorField} label="Email"/>
          <button type="submit">Add People</button>
        </form>
      </div>
    );
  }
}

const validate = ({fname, lname, email}) => {
  const errors = {}

  if (!fname) errors.fname = 'First Name is a required field'

  if (!lname) errors.lname = 'Last Name is a required field'

  if (!email) errors.email = 'email is a required field'
  else if (!validator.validate(email)) errors.email = 'invalid email'

  return errors
}

export default reduxForm({
  form: 'add-people',
  validate,
})(AddPeopleForm)
