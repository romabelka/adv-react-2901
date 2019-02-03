import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import AuthPage from './components/routes/auth';
import AdminPage from './components/routes/admin';

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
          <Route path="/auth" component={AuthPage}/>
          <Route path="/admin" component={AdminPage}/>
        </section>
      </div>
    )
  }
}

export default App
