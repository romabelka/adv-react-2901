import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../../../ducks/auth";

class AdminPage extends Component {
  static propTypes = {};

  logOut = () => {
    this.props.signOut().then(() => {
      this.props.history.push("/auth");
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.logOut}>LogOut</button>
        </div>
        <h1>Admin</h1>
      </div>
    );
  }
}

export default connect(
  null,
  { signOut }
)(AdminPage);
