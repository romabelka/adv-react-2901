import React, { Component } from 'react'
import UserList from '../../users/user-list'
import UserForm from '../../users/user-form'

class Users extends Component {
  render() {
    return (
      <>
        <UserForm />
        <UserList />
      </>
    )
  }
}

export default Users
