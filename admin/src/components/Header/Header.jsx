import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/auth" activeStyle={{ color: 'red'}}>auth</NavLink>
          </li>
          <li>
            <NavLink to="/admin" activeStyle={{ color: 'red'}}>admin</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
