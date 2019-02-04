import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserList from '../../users/user-list'
import UserForm from '../../users/user-form'
import { createUser } from '../../../ducks/users'

class Users extends Component {
  render() {
    return (
      <div>
        <UserForm onSubmit={this.handleSubmit} />
        <UserList />
      </div>
    )
  }

  handleSubmit = ({ email, lastName, firstName }) => {
    this.props.createUser({
      email,
      lastName,
      firstName
    })
  }
}

export default connect(
  null,
  { createUser }
)(Users)
