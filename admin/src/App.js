import React, { Component } from 'react'
import { Route, NavLink, Redirect, Switch } from 'react-router-dom'
import AuthPage from './components/routes/auth'
import AdminPage from './components/routes/admin'
import PeoplePage from './components/routes/people'
import {connect} from 'react-redux'
import {userSelector} from './ducks/auth'

class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/auth" activeStyle={{ color: 'red'}}>auth</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeStyle={{ color: 'red'}}>admin</NavLink>
                        </li>
                        <li>
                            <NavLink to="/people" activeStyle={{ color: 'red'}}>people</NavLink>
                        </li>
                    </ul>
                </nav>
                <section>
                    <Switch>
                        <Route path="/auth" component={AuthPage}/>
                        {!this.props.user && <Redirect from="/admin" to={'/auth'} />}
                        <Route path="/admin" component={AdminPage}/>
                        <Route path="/people" component={PeoplePage}/>
                    </Switch>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    user: userSelector(state)
})

export default connect(mapStateToProps)(App)
