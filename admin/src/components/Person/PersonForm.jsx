import React, {Component, Fragment} from 'react'
import { reduxForm, Field } from 'redux-form'
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

export default reduxForm({
  form: 'add-person'
})(PersonForm)
