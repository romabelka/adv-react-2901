import React from 'react'
import {connect} from 'react-redux'
import FormListUsers from '../ListUsers';
import {addUser} from "../../ducks/list-users";

const ListUsers = () => (
  <div>
    {this.props.users.map(item => (
      <div>
        name:
        <p>{item.name}</p>
        email:
        <p>{item.email}</p>
      </div>
    ))}
    <FormListUsers onSubmit={this.props.addUser}/>
  </div>
);

export default connect(state => ({users: state.listUsers}), {addUser})(ListUsers);
