import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserItem extends Component {
  static propTypes = {
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }

  render() {
    const { email, firstName, lastName } = this.props

    return (
      <div>
        <div>{email}</div>
        <div>{firstName}</div>
        <div>{lastName}</div>
      </div>
    )
  }
}

export default UserItem
