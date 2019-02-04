import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import AuthPage from './components/routes/auth'
import AdminPage from './components/routes/admin'
import PrivateRoute from './components/common/private-route'
import { connect } from 'react-redux'
import { setUserToStore } from './ducks/auth'

class App extends Component {
  static propTypes = {}

  componentDidMount() {
    this.props.setUserToStore()
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/auth" activeStyle={{ color: 'red' }}>
                auth
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeStyle={{ color: 'red' }}>
                admin
              </NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Route path="/auth" component={AuthPage} />
          <PrivateRoute path="/admin" component={AdminPage} />
        </section>
      </div>
    )
  }
}

export default connect(
  null,
  { setUserToStore }
)(App)
