import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'
import AuthPage from './components/routes/auth'
import AdminPage from './components/routes/admin'
import ProtectedRoute from "./components/common/protected-route";
import AuthProvider from "./components/common/auth-provider";

class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <AuthProvider>
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
                    <section>
                        <Route path="/auth" component={AuthPage}/>
                        <ProtectedRoute path="/admin" component={AdminPage}/>
                    </section>
                </AuthProvider>
            </div>
        )
    }
}

export default App
