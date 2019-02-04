import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import AuthPage from './components/Pages/auth'
import AdminPage from './components/Pages/admin'
import UserList from './components/Pages/UserList'
import { connect } from "react-redux";
import AuthRoute from "./components/routes/AuthRoute";
import { checkAuth } from "./ducks/auth";

class App extends Component {
    static propTypes = {}

    componentDidMount() {
        checkAuth();
    }


    getUser() {
        const result = Boolean(this.props.user) ? '' : '( Private Route )';
        return result;
    }

    render() {

        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/auth" activeStyle={{color: 'red'}}>auth</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeStyle={{color: 'red'}}>admin {this.getUser()}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/user-list" activeStyle={{color: 'red'}}>User list{this.getUser()}</NavLink>
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
        user: state.auth.user,
    }
};

export default connect(mapStateToProps, {checkAuth})(App)

