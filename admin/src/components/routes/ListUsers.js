import React from 'react'
import {connect} from 'react-redux'
import FormListUsers from '../ListUsers';
import {addUser} from "../../ducks/list-users";

const ListUsers = ({users, addUser}) => (
  <div>
    <hr />
    <ul>
    {users.map(item => (
      <li key={`${item.email}_${item.name}`}>
        name:
        <p>{item.name}</p>
        email:
        <p>{item.email}</p>
      </li>
    ))}
    </ul>
    <FormListUsers onSubmit={addUser}/>
  </div>
);

export default connect(state => ({users: state.listUsers}), {addUser})(ListUsers);
