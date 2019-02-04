import React from "react";
import { connect } from "react-redux";
import { loadUsers, createUser, deleteUser } from "../../../ducks/users";
import { Route } from "react-router-dom";
import CreateUserForm from "../../users/create-user-form";

const User = ({ user, handleDelete }) => (
  <div>
    <div>name: {user.name}</div>
    <div>surname: {user.surname}</div>
    <div>age: {user.age}</div>
    <button onClick={() => handleDelete(user.id)}>delete</button>
  </div>
);

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  addUser = () => {
    //push("/users/create")
    console.log("add User");
    //push("/admin/");
    this.props.history.push("/users/create");
  };

  handleCreateUser = ({ name, surname, age }) => {
    this.props.createUser({ name, surname, age });
    this.props.history.push("/users/");
  };

  createUserForm = () => <CreateUserForm onSubmit={this.handleCreateUser} />;

  handleDelete = id => {
    console.log("delete");
    this.props.deleteUser(id);
  };

  render() {
    const { users } = this.props;
    console.log("users:", this.props.users);
    return (
      <div>
        <button onClick={this.addUser}>+ Add User</button>
        <Route exact path="/users/create" render={this.createUserForm} />
        {users && users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <User user={user} handleDelete={this.handleDelete} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("map ", state.users.get("users"));
  return {
    users: state.users.get("users")
  };
}

export default connect(
  mapStateToProps,
  { loadUsers, createUser, deleteUser }
)(UsersPage);
