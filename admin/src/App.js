import React, {Component} from 'react';
import {Route, NavLink, Switch} from 'react-router-dom';
import AuthPage from './components/routes/auth';
import AdminPage from './components/routes/admin';
import ProtectedRoute from './components/routes/ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/auth" activeStyle={{color: 'red'}}>auth</NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeStyle={{color: 'red'}}>admin</NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Switch>
            <Route path="/auth" component={AuthPage}/>
            <ProtectedRoute path="/admin" component={AdminPage}/>
          </Switch>
        </section>
      </div>
    )
  }
}

export default App
