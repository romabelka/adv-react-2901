import React, {Component, Fragment} from 'react'
import { reduxForm, Field } from 'redux-form'
import emailValidator from "email-validator";

import ErrorField from "../common/error-field";

class PersonForm extends Component {
  render() {
    return (
      <Fragment>
        <h3> Add Person </h3>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="email" label="Email: " component={ErrorField} />
          <Field name="firstName" label="First name: " component={ErrorField} />
          <Field name="lastName" label="Last name: " component={ErrorField} />
          <button type="submit">Add</button>
        </form>
      </Fragment>
    )
  }
}

const validate = ({ email, firstName, lastName }) => {
  const errors = {};

  if (!email) errors.email = "Обязательное поле";
  else if (!emailValidator.validate(email)) errors.email = "Некорректный email";

  if (!firstName) errors.firstName = "Обязательное поле";
  if (!lastName) errors.lastName = "Обязательное поле";

  return errors;
};

export default reduxForm({
  form: 'add-persons',
  validate,
})(PersonForm)
