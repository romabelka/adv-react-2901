import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import propTypes from 'prop-types'

import ErrorField from '../common/error-field'

class UserForm extends Component {
  static propTypes = {
    handleSubmit: propTypes.func.isRequired
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field name="firstName" component={ErrorField} />
        <Field name="lastName" component={ErrorField} />
        <Field name="email" component={ErrorField} />
        <input type="submit" value="Add" />
      </form>
    )
  }
}

export default UserForm
