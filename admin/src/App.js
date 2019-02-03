import React, { Component } from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthPage from './components/routes/auth'
import AdminPage from './components/routes/admin'
import AddPeople from './components/routes/add-people'

class App extends Component {

    render() {
        const { user } = this.props;

        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/auth" activeStyle={{ color: 'red'}}>auth</NavLink>
                        </li>
                        {user && <li>
                            <NavLink to="/admin" activeStyle={{ color: 'red'}}>admin</NavLink>
                        </li>}
                        {user && <li>
                            <NavLink to="/add-people" activeStyle={{ color: 'red'}}>add people</NavLink>
                        </li>}
                    </ul>
                </nav>
                <section>
                    <Switch>
                        <Route path="/auth" component={AuthPage} />
                        {user
                         ? <Route path="/admin" component={AdminPage} />
                         : <Redirect from="/admin" to="/auth" />
                        }
                        <Route path="/add-people" component={AddPeople} />
                        {/*{user*/}
                         {/*? <Route path="/add-people" component={AddPeople} />*/}
                         {/*: <Redirect from="/add-people" to="/auth" />*/}
                        {/*}*/}
                    </Switch>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
})

export default connect(mapStateToProps)(App)
