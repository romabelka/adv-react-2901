import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signOut } from "../../ducks/auth";

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    signOut,
  },
  dispatch,
);


class Header extends Component {
  render() {
    const { signOut } = this.props;

    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/auth" activeStyle={{ color: 'red'}}>auth</NavLink>
          </li>
          <li>
            <NavLink to="/admin" activeStyle={{ color: 'red'}}>admin</NavLink>
          </li>
          <li>
            <NavLink to="/add-person" activeStyle={{ color: 'red'}}>add person</NavLink>
          </li>
          <li>
            <button onClick={signOut}> Sign out </button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default connect(null, mapDispatchToProps)(Header);
