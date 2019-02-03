import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import {connect} from 'react-redux'
import AuthPage from './components/routes/auth';
import Header from './components/Header';
import AdminPage from './components/routes/admin';
import ListUsers from './components/routes/ListUsers';
import ProtectedRoute from './components/routes/ProtectedRoute';
import {initUser} from './ducks/auth'

class App extends Component {

  componentDidMount() {
    this.props.initUser();
  }

  render() {
    return (
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <NavLink to="/auth" activeStyle={{color: 'red'}}>auth</NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeStyle={{color: 'red'}}>admin</NavLink>
            </li>
            <li>
              <NavLink to="/list-users" activeStyle={{color: 'red'}}>list-users</NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Switch>
            <Route path="/auth" component={AuthPage}/>
            <ProtectedRoute path="/admin" component={AdminPage}/>
            <ProtectedRoute path="/list-users" component={ListUsers}/>
          </Switch>
        </section>
      </div>
    );
  }
}

export default connect(null, {initUser})(App)
