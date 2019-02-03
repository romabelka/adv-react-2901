import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import AuthPage from './components/Pages/auth'
import AdminPage from './components/Pages/admin'
import UserList from './components/Pages/UserList'
import { connect } from "react-redux";
import AuthRoute from "./components/routes/AuthRoute";

class App extends Component {
    static propTypes = {}

    render() {
        const {user} = this.props;
        const closed = user === undefined ? '( Private Route )' : '';
        console.log('user = ', user);
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/auth" activeStyle={{color: 'red'}}>auth</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeStyle={{color: 'red'}}>admin {closed}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user-list" activeStyle={{color: 'red'}}>User {closed}</NavLink>
                        </li>
                    </ul>
                </nav>
                <section>
                    <Route path="/auth" component={AuthPage}/>
                    <AuthRoute path="/admin" component={AdminPage}/>
                    <AuthRoute path="/user-list" component={UserList}/>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state = ', state.auth)
    return {
        user: state.auth.user
    }
};

export default connect(mapStateToProps)(App)

