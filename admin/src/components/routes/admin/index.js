import React, { Component } from 'react'
import UsersPage from '../users'

class AdminPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h1>Admin Panel</h1>
        <UsersPage />
      </div>
    )
  }
}

export default AdminPage
