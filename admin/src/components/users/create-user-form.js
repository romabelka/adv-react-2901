import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validator from "email-validator";
import ErrorField from "../common/error-field";

class CreateUserForm extends Component {
  static propTypes = {};

  render() {
    console.log("create user from");
    return (
      <div>
        <h3>Create User</h3>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="name" component={ErrorField} label="name" />
          <Field name="surname" component={ErrorField} label="surname" />
          <Field name="age" component={ErrorField} label="age" />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

const validate = ({ name, surname, age }) => {
  const errors = {};
  if (!name) errors.name = "name is a required field";
  if (!surname) errors.surname = "surname is a required field";
  if (!age) errors.age = "age is a required field";

  return errors;
};

export default reduxForm({
  form: "create-user-form",
  validate
})(CreateUserForm);
