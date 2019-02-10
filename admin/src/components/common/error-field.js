import React, { Component } from 'react'

class ErrorField extends Component {
  static propTypes = {}

  render() {
    const {
      input,
      meta: { error, touched },
      type,
      label
    } = this.props
    const errorText = error && touched && (
      <div style={{ color: 'red' }}>{error}</div>
    )
    return (
      <div>
        <div>{label}</div>
        <div>
          <input {...input} type={type} />
        </div>
        {errorText}
      </div>
    )
  }
}

export default ErrorField
