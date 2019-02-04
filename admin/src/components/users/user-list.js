import React, { Component } from 'react'
import { connect } from 'react-redux'
import { usersSelector } from '../../ducks/users'
import UserItem from './user-item'

class UserList extends Component {
  render() {
    return (
      <>
        <h1>USER LIST</h1>
        {this.props.users.map(({ lastName, firstName, email, id }) => {
          return (
            <UserItem
              key={id}
              lastName={lastName}
              firstName={firstName}
              email={email}
            />
          )
        })}
      </>
    )
  }
}

export default connect(state => ({
  users: usersSelector(state)
}))(UserList)
